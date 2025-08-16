class UploadController {
  uploadImage = (req, res) => {
    // const file = req.file;
    // res.send(file)
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    return res.status(200).json({ url: fileUrl });
  };
}

module.exports = new UploadController();
