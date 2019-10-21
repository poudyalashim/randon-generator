/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



// Creating Array of objects
var quotes = [
  {
     quote: 'If you judge people, you have no time to love them.',
     source: 'Mother Teresa'
  },

  {
    quote: 'The future belongs to those who prepare for it today.',
    source: 'Malcolm X'
  },

  {
    quote: "It always seems impossible until it's done.",
    source: "Nelson Mandela"
  },

  {
    quote: "It's not how much you have that makes people look up to you, it's who you are.",
    source: "Elvis Presley"
  },

  {
    quote: "Good artists copy, great artists steal.",
    source: "Pablo Picasso",
    citation: "wisdomquotes.com",
    year: 2019
  }

];


// generates random number from 0 toll length of quotes and stores that number in variable named randomNumber
//quotes[randomNumber] generates quotes from object array whatever randomNumber is generated, randomNumber is Array index number.
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length); // storing random quotes number to randomNumber variable
  const randomQuote = quotes[randomNumber]; // storing quotes[randomNumber] to variable randomQuote 
  console.log(randomNumber);
  console.log(randomQuote);
  return randomQuote; 
};
getRandomQuote();


  
  


function printQuote() {
  var stringHtml = '';
  var allQuote = getRandomQuote(); // call getRandomQuote function
  
  var quoteBox = document.querySelector('#quote-box');
    stringHtml += '<p class="quote">' + allQuote.quote +'</p>';
    stringHtml += '<p class="source">' + allQuote.source;

    // if statement checks if quotes array has citation property
    if (allQuote.citation ) {
    stringHtml += '<span class="citation">' + allQuote.citation + '</span>' 
    }
    if (allQuote.year) {
    stringHtml +=  '<span class="year">' + allQuote.year + '</span>';
    }
   stringHtml += '</p>';
   
    quoteBox.innerHTML = stringHtml;
  }

 

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.