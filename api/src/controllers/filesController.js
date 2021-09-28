require('dotenv').config();
const fs = require('fs');

exports.getListBanners = (req, res) => {
    const directoryPath = __basedir + "/src/static/assets/uploads/banners";
  
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(500).send({
          message: "Unable to scan files!",
        });
      }
  
      let fileInfos = [];
  
      files.forEach((file) => {
        fileInfos.push({
          name: file,
          url: process.env.BASE_URL + file,
        });
      });
  
      res.status(200).send(fileInfos);
    });
};

exports.importBanner = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/src/static/assets/uploads/banners";

    var img = fs.readFileSync(directoryPath + fileName);

    if(fileName.indexOf('.png') > 0){

      console.log('is png');

      res.writeHead(200, {'Content-Type': 'image/png' });
      res.end(img, 'binary');
    } else if (fileName.indexOf('.jpeg') > 0 || fileName.indexOf('.jpg') > 0){
      
      console.log('is jpg or jpeg');

      res.writeHead(200, {'Content-Type': 'image/jpeg' });
      res.end(img, 'binary');
    } else if (fileName.indexOf('.gif') > 0){

      console.log('is gif');

      res.writeHead(200, {'Content-Type': 'image/gif' });
      res.end(img, 'binary');
    } else if (fileName.indexOf('.svg') > 0){

      console.log('is svg');
      
      res.writeHead(200, {'Content-Type': 'image/svg+xml' });
      res.end(img, 'binary');
    }

}

exports.downloadBanner = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/src/static/assets/uploads/banners";
  
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "Could not download the file. " + err,
        });
      }
    });
};
  


exports.getListOffers = (req, res) => {
  const directoryPath = __basedir + "/src/static/assets/uploads/offers";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: process.env.BASE_URL + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

exports.importOffers = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/src/static/assets/uploads/offers";

  var img = fs.readFileSync(directoryPath + fileName);

  if(fileName.indexOf('.png') > 0){

    console.log('is png');

    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
  } else if (fileName.indexOf('.jpeg') > 0 || fileName.indexOf('.jpg') > 0){
    
    console.log('is jpg or jpeg');

    res.writeHead(200, {'Content-Type': 'image/jpeg' });
    res.end(img, 'binary');
  } else if (fileName.indexOf('.gif') > 0){

    console.log('is gif');

    res.writeHead(200, {'Content-Type': 'image/gif' });
    res.end(img, 'binary');
  } else if (fileName.indexOf('.svg') > 0){

    console.log('is svg');
    
    res.writeHead(200, {'Content-Type': 'image/svg+xml' });
    res.end(img, 'binary');
  }

}

exports.downloadOffers = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/src/static/assets/uploads/offers";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

exports.getListDestinations = (req, res) => {
  const directoryPath = __basedir + "/src/static/assets/uploads/destinations";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: process.env.BASE_URL + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

exports.importDestinations = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/src/static/assets/uploads/destinations";

  var img = fs.readFileSync(directoryPath + fileName);

  if(fileName.indexOf('.png') > 0){

    console.log('is png');

    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
  } else if (fileName.indexOf('.jpeg') > 0 || fileName.indexOf('.jpg') > 0){
    
    console.log('is jpg or jpeg');

    res.writeHead(200, {'Content-Type': 'image/jpeg' });
    res.end(img, 'binary');
  } else if (fileName.indexOf('.gif') > 0){

    console.log('is gif');

    res.writeHead(200, {'Content-Type': 'image/gif' });
    res.end(img, 'binary');
  } else if (fileName.indexOf('.svg') > 0){

    console.log('is svg');
    
    res.writeHead(200, {'Content-Type': 'image/svg+xml' });
    res.end(img, 'binary');
  }

}

exports.downloadDestinations = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/src/static/assets/uploads/destinations";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};