var quotesCopy = [];
document.getElementById("loadQuote").addEventListener("click", function () {
  timer();
  printQuote();
});

window.onload = printQuote();

function getRandomQuote() {
  if (quotesCopy.length === 0) {
    quotesCopy = [].concat(quotes);
  }
  var quote = quotesCopy.splice(
    Math.floor(Math.random() * quotesCopy.length),
    1
  )[0];

  console.log(quotesCopy);
  return quote;
}

// Timer
function timer() {
  clearInterval(window.intervalID);
  window.intervalID = setInterval(printQuote, 30000);
}
timer();

function printQuote() {
  var currentQuote = getRandomQuote();
  var message = '<p class="quote">' + currentQuote.quote + "</p>";
  message += '<p class="source">' + currentQuote.source;

  if (currentQuote.date) {
    message += '<span class="year">' + currentQuote.date + "</span>";
  }
  message += "</p>";

  document.getElementById("quote-box").innerHTML = message;
}

printQuote();
