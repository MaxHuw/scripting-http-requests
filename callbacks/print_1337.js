var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printLeetSpeak(html){

  let htmlArray = html.split('');

  for (var i = 0; i < htmlArray.length; i ++){

    switch (htmlArray[i] + htmlArray[i +1] + htmlArray[i + 2]){

      case 'you':
      htmlArray.splice(i, 3, 'j00');
      break;

      default:
      break;
    }


    switch (htmlArray[i] + htmlArray[i +1]){

      case 'ck':
      htmlArray.splice(i, 2, 'x');
      break;

      case 'er':
      htmlArray.splice(i, 2, '0r');
      break;

      default:
      break;
    }

    switch (htmlArray[i]){
      case 'a':
      htmlArray[i] = '4';
      break;

      case 'e':
      htmlArray[i] = '3';
      break;

      case 'l':
      htmlArray[i] = '1';
      break;

      case 'o':
      htmlArray[i] = '0';
      break;

      case 's':
      htmlArray[i] = '5';
      break;

      case 't':
      htmlArray[i] = '7';
      break;

      default:
      break;
    }

  }

  html = htmlArray.join('');

  console.log(html);
}

getHTML(requestOptions, printLeetSpeak);