exports.getListFiles = (req, res) => {
    const directoryPath = __basedir + "/src/static/assets/uploads/";
  
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
          url: baseUrl + file,
        });
      });
  
      res.status(200).send(fileInfos);
    });
};

exports.importBanner = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/src/static/assets/uploads";

    res.status(200).json({
        bannerSrc: directoryPath + fileName
    })
}

exports.download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/src/static/assets/uploads/";
  
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "Could not download the file. " + err,
        });
      }
    });
};
  