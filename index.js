// Practice your JS here!
const url = fetch('https://api.kanye.rest/')
fetch('https://api.kanye.rest')
.then(response => response.json())
.then(function(quotes){
    console.log(quotes)
})

function turnQuotesToText(quotes) {
    console.log(quotes);
    let QuotesLi = document.createElement('display');
}

document.append(QuotesLi)

addEventListener