require('dotenv').config();
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const localFileAdapter = new LocalFileAdapter({
  src: 'public/files',
  path: '/public/files'
});

const fileAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'cita',
});

module.exports = { fileAdapter, localFileAdapter };
