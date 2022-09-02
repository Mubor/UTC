const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: {
        home: './src/app/home/home.js', 
        contacts: './src/app/contacts/contacts.js',
        simple: './src/app/simple/simple_page.js',
    },
    resolve: {
        fallback: {
          // "googleapis": require.resolve("googleapis"),
          "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
        } 
      },
      plugins: [
        new Dotenv()
    ],
  };