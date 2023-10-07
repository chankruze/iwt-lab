const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const refreshButton = document.getElementById("refresh-button");

// Fetch a random quote from the API
async function fetchQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  return data.content;
}

// Display the quote on the page
function displayQuote(quote) {
  quoteText.textContent = quote;
}

// Refresh the quote when the button is clicked
refreshButton.addEventListener("click", async () => {
  const quote = await fetchQuote();
  displayQuote(quote);
});

// Get an initial quote
fetchQuote().then((quote) => displayQuote(quote));
