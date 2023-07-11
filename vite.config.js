// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        issues: resolve(__dirname, 'issues.html'),
        about: resolve(__dirname, 'about.html'),
        experts: resolve(__dirname, 'experts.html'),
        internship: resolve(__dirname, 'internship.html'),
      }
    }
  }
}