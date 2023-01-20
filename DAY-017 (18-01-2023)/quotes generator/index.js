const quote = document.getElementById("quote")
const author = document.getElementById("author")
const nextButton = document.getElementById("nextButton")

async function nextQuote() {
    const response = await fetch("https://api.quotable.io/random")
    const data =  await response.json()
    console.log(data);
    quote.innerText =  `" ${data.content} "`
    author.innerText = data.author
}
nextQuote()


