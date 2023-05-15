const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => showDisplay(data))
}

const showDisplay = (quoteData) => {
    // console.log(quoteData.quote);
    const quote = quoteData.quote;
    document.getElementById('quote').innerHTML = quote;
}
loadQuote();