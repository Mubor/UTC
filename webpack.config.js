const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        home: './public/src/app/home/home.js', 
        contacts: './public/src/app/contacts/contacts.js',
        simple: './public/src/app/simple/simple_page.js',
    },
    output: {
      path: path.resolve(__dirname + '/public', "dist"),
    }
  };