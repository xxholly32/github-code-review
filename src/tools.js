const request = require("request")

exports.connectGithub = function (url) {
  return new Promise(async (resolve, reject) => {
    request({
      url: url,
      headers: {
        "content-type": "application/json",
        "User-Agent": "xxholly32"
      }
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(JSON.parse(body))
      } else {
        reject(error)
      }
    })
  })
}