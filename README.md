# downloadAPI 
It is an example using gcloud to upload file from local to google storage, through formidable to parse both json and file as input.

## Install

```
$ npm install
```


## Usage


```js

localhost/upload.html

```

Function version

```js
// Below is the result you will see in the console

//The json which appended in upload.html
{ category: 'study',
  buildingName: 'Cuiti',
  buildingUID: '-KDgVMjaMx8ELCs1bcjK',
  isWeb: true }

//File name
fileName: 01/a1.jpg

//Local file path
fileLocalPath: /var/folders/1g/fyns6d5567b3fc4p9d3sqk4m0000gn/T/upload_5eef1a0546d816232420cd758f5456a7

//When finishing upload, return the download link
upload success: https://storage.googleapis.com/peterbucket/01/a1.jpg
```


## API
### no API
no API

```js
googleAPI.gstorageSave("peterbucket", fileName, fileLocalPath).then(function(link) { ....
```

## License

MIT © [Kevin Mårtensson](http://github.com/kevva)