const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const fileAdapter = new LocalFileAdapter({
  src: './files',
  path: '/files',
})

module.exports = fileAdapter;