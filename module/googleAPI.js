

var gcloud = require('gcloud')
var config = require('../config.json')

var API = function () {
}


var gcs = gcloud.storage({
  projectId: config.googleProjectId,
  keyFilename: config.googleJsonFile
})


API.gstorageSave = function (bucketname, fileName, tempPath) {

  var deferred = Promise.defer()

  var bucket = gcs.bucket(bucketname),
      file = bucket.file(fileName),
      downloadlink = "https://storage.googleapis.com/" + bucketname + "/" + fileName;

  bucket.upload(tempPath, { destination: fileName }, function (err, filet) {
    if (err) {
      deferred.reject(err)
    } else {
      filet.makePublic(function (err, api) {
        if (err) {
          deferred.reject(err)
        } else {
          deferred.resolve(downloadlink)
        }
      })
    }
  })

  return deferred.promise
}



module.exports = API
