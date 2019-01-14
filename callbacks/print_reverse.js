var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printReverse(html){
  let htmlReverse = html.split('').reverse().join('');
  console.log(htmlReverse);
}

getHTML(requestOptions, printReverse);