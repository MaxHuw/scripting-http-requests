var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printUpperCase(html){
  let htmlLower = html.toLowerCase();
  console.log(htmlLower);
}

getHTML(requestOptions, printUpperCase);