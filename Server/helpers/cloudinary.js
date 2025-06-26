const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
	cloud_name: "der8l8sov",
	api_key: "496147912841353",
	api_secret: "rDm9z2NNkFf-40zJxwc-GsJunJ0",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
