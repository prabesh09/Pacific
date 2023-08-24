const quotes = document.getElementById("quotes");

function getStoredQuotes() {
    const storedQuotes = localStorage.getItem("storedQuotes");
    return storedQuotes ? JSON.parse(storedQuotes) : [];
}

function displayQuote(quote) {
    console.log(`"${quote.content}" - ${quote.author}`);
    quotes.innerHTML = `"${quote.content}" - ${quote.author}`;
}

function loadStoredQuote() {
    const storedQuotes = getStoredQuotes();
    if (storedQuotes.length > 0) {
        console.log(storedQuotes[0]);
        displayQuote(storedQuotes[0]);
    }
}

async function fetchAndStoreQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const newQuote = await response.json();
        saveQuoteToStorage(newQuote);
    } catch (error) {
        console.error("Error fetching or storing quote:");
    }
}

function saveQuoteToStorage(quote) {
    const storedQuotes = getStoredQuotes();
    storedQuotes.push(quote);
    if (storedQuotes.length > 10) {
        storedQuotes.shift();
    }
    localStorage.setItem("storedQuotes", JSON.stringify(storedQuotes));
}

window.addEventListener("load", fetchAndStoreQuote);
window.addEventListener("load", loadStoredQuote);
