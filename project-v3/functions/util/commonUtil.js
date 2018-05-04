const request = require("request");
const cheerio = require("cheerio");
const gm = require("gm");
const properties = require("../properties.json");
const gcloud = require("google-cloud");
const File = require("../model/File");
const Image = require("../model/Image");

const bucket = gcloud
	.storage({
		projectId: "react-pwa-webtoon",
		keyFilename: properties.index.serviceAccount
	})
	.bucket("react-pwa-webtoon");

const commonUtil = {
	sliceString: (str, from, end) => {
		return str.substring(str.indexOf(from) + from.length, str.indexOf(end));
	},
	sliceStr: (str, from, size) => {
		return str.substr(str.indexOf(from) + from.length, size);
	},
	strCodePoint: a => {
		while (a.indexOf("&#x") != -1) {
			a =
				a.slice(0, a.indexOf("&#x")) +
				String.fromCodePoint(
					parseInt(
						"0" +
							a.slice(a.indexOf("&#x") + 2, a.indexOf("&#x") + 7)
					)
				) +
				a.slice(a.indexOf("&#x") + 8);
		}
		return a;
	},
	/**
	 * request module
	 * ex) commonUtil.requestHTML("http://www.naver.com","")
	 * 				.then(result=>{console.log(result);});
	 * */
	requestHTML: args => {
		let url = args.url != undefined ? args.url : args[0];
		let referer = args.referer != undefined ? args.referer : args[1];
		var options = {
			url: url,
			headers: {
				Referer: referer,
				"user-agent": properties.userAgent
			}
		};
		return new Promise((resolve, reject) => {
			request(options, (err, res, body) => {
				if (!err && res.statusCode == 200) {
					resolve(body);
				} else {
					reject(err);
				}
			});
		});
	},
	/**
	 * crawling module
	 * ex) commonUtil
	 * 		.crawlingHTMLArray("<html><div class='target'><li>asd</li></div></html>",".target")
	 * 		.then(result=>{console.log(result);});
	 * */
	crawlingHTMLArray: args => {
		let src = args.src != undefined ? args.src : args[0];
		let selector = args.selector != undefined ? args.selector : args[1];
		//return
		return new Promise((resolve, reject) => {
			let $ = cheerio.load(src);
			let result = $(selector);
			//console.log("result");
			if (result.length == 0) {
				//console.log("result.length", result.length);
				reject(false);
			} else if (result != undefined) {
				resolve(result.map((i, ele) => cheerio(ele).html()));
			} else {
				reject(result);
			}
		});
	},
	/**
	 * requestImage
	 * @param argsurl, referer
	 * @returns {Promise<any>}
	 */
	requestImage: args => {
		let url = args.url != undefined ? args.url : args[0];
		let referer = args.referer != undefined ? args.referer : args[1];
		const options = {
			url: url,
			headers: {
				Referer: referer,
				"user-agent": properties.userAgent
			},
			encoding: null
		};
		return new Promise((resolve, reject) => {
			request(options, (err, res) => {
				if (!err && res.statusCode == 200) {
					resolve(res);
				} else {
					console.log(err);
					if (res == undefined) reject(err);
					else reject([res.statusCode, res.statusMessage]);
				}
			});
		});
	},
	/**
	 * storeImageToBucket
	 * @param args pipe, path,type,tag
	 * @returns {Promise<any>}, file model and image model
	 *
	 *
	 */
	storeImageToBucket: args => {
		let body = args.body != undefined ? args.body : args[0];
		let path = args.path != undefined ? args.path : args[1];
		let type = args.type != undefined ? args.type : args[2];
		let res = args.res != undefined ? args.res : args[3];
		let options = args.options != undefined ? args.options : args[4];
		let file = bucket.file(path);
		return new Promise((resolve, reject) => {
			file
				.createWriteStream({
					metadata: {
						contentType: type
					}
				})
				.on("error", function(err) {
					reject(err);
				})
				.on("finish", function() {
					file.getSignedUrl(
						{
							action: "read",
							expires: "31-12-2030"
						},
						function(err, url) {
							if (err) {
								reject(err);
							} else {
								resolve({
									file: File.instance(res, path, url).file,
									image: Image.instance(res, options).image
								});
							}
						}
					);
					// The file upload is complete.
				})
				.end(body);
		});
	},
	/**
	 * isValidImage
	 * valify image with gm library
	 * @param args
	 * @returns {Promise<any>}
	 */
	isValidImage: args => {
		let path = args.path != undefined ? args.path : args[0];
		let file = bucket.file(path);
		return new Promise((resolve, reject) => {
			file.download((err, contents) => {
				gm(contents).identify((err, data) => {
					if (!err) {
						resolve(true);
					} else {
						reject(err);
					}
				});
			});
		});
	},

	promiseSeqOneSec: promises => {
		let oneSecFunc = (fc, args, sec) => {
			return new Promise(resolve => {
				setTimeout(
					() => {
						resolve(fc(args));
					},
					1000 * sec,
					{}
				);
			});
		};
		if (promises == undefined) {
			console.log("promises is undefined");
			return null;
		}
		let processPromises = [];
		for (let i = 0; i < promises.length; i++) {
			processPromises.push(
				oneSecFunc(promises[i].func, promises[i].args, i)
			);
		}
		return Promise.all(processPromises);
	},
	promiseSeq: promises => {
		const oneFunc = (fc, args) => {
			return new Promise(resolve => {
				resolve(fc(args));
			});
		};
		let current = oneFunc(promises[0].func, promises[0].args);
		for (let i = 1; i < promises.length; i++) {
			current = current.then(() => {
				return oneFunc(promises[1].func, promises[i].args);
			});
		}
		return current;
	},
	getDateFormat: format => {
		const date = new Date();
		let src = date.toString().split(" ");
		let time = src[4].split(":");
		let month = date.getMonth() + 1;
		const form = {
			yyyy: src[3],
			YYYY: src[3],
			yy: src[3].substr(0, 2),
			YY: src[3].substr(0, 2),
			MMM: src[1],
			MM: parseInt(month / 10) > 0 ? month : "0" + (month + ""),
			DD: src[2],
			dd: src[2],
			EEE: src[0],
			eee: src[0].toLowerCase(),
			HH: time[0],
			hh: parseInt(time[0]) % 12 + "",
			mm: time[1],
			SS: time[2],
			ss: time[2]
		};
		for (i in form) {
			format = format.replace(new RegExp(i, "g"), form[i]);
		}
		return format;
	}
};

module.exports = commonUtil;