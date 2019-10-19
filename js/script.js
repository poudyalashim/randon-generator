/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
//Jai Saraswati Mata ki Jaya!!!
//Jai Durga mata!!!

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing



/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
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



// console.log(quotes[4].year);



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length) + 1;
  return randomNumber;
}

console.log(getRandomQuote());

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function print( box ) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = stringHtml;
}
var stringHtml = '';

function printQuote() {
  var number = getRandomQuote();
  for (let i = 0; i < quotes.length; i += 1 ) {
    stringHtml += '<p class="quote">' + quotes[i].quote + '</p>' ;
    stringHtml += '<p class="source">' + quotes[i].source + 
    
    '<span class="citation">' + quotes[i].citation + '</span>' +
  }
}

 

 

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.