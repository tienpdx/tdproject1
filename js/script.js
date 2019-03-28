//list of quotes//

quotes = [
  {quote: "Life is about making an impact, not making an income.",
  source: "Kevin Kruse",
  citation: "www.google.com"},
  {quote: "Whatever the mind of man can conceive and believe, it can achieve.",
  source: "Napoleon Hill",
  year: 1590},
  {quote: "Strive not to be a success, but rather to be of value.",
  source: "Albert Einstein"},
  {quote: "I attribute my success to this: I never gave or took any excuse.",
  source: "Florence Nightingale"},
  {quote: "You miss 100% of the shots you don’t take.",
  source: "Wayne Gretzky"},
  {quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
  source: "Amelia Earhart"},
  {quote: "Every strike brings me closer to the next home run.",
  source: "Babe Ruth"},
  {quote: "Definiteness of purpose is the starting point of all achievement.",
  source: "W. Clement Stone"},
  {quote: "Life is 10% what happens to me and 90% of how I react to it.",
  source: "Charles Swindoll"},
  {quote: "An unexamined life is not worth living.",
  source: "Socrates"}
]

//testing to see every quotes in console log//

for (var i = 0; i < quotes.length; i +=1) {
  var quoteO = quotes[i]
  for (var prop in quoteO) {
  console.log(quoteO.quote)
  }
}

//getRandomQuote function will return a random object selected within the quotes array//

function getRandomQuote() {
  var randNum = Math.floor(Math.random() * 10)
  var quoteOb = quotes[randNum]
  return quoteOb
}

//testing to see if function works and returns the expected value//

console.log("This is the random quote: " + getRandomQuote().quote + " by " + getRandomQuote().source)

//printQuote function will print quote and its properities in html onto the webpage//

function printQuote() {
  var obj = getRandomQuote(); //obj is object within array of quotes
  var html = "";

  html = '<p class="quote">' + obj.quote + '</p>' + '<p class="source">' + obj.source

  if (obj.citation !== undefined) {
    html += '<span class = "citation">' + obj.citation + '</span>'
  }
  if (obj.year !== undefined) {
    html += '<span class = "year">' + obj.year + '</span>'
  }

  html += '</p>'
  document.getElementById('quote-box').innerHTML = html;
}

printQuote();

/***
    When "Show another quote" button is clicked, a new quote will be shown on webpage
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
