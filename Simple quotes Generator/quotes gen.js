let quote=document.querySelector('.quote')
let author=document.querySelector('.author')
let newquote=document.getElementById('newquote')


const quotes = [
    {
        quote:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        author:`Marilyn Monroe`
    },
    {
        quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
        author:`Bernard M. Baruch`
    },   
]

newquote.addEventListener('click',function(){
    let randomquote=Math.floor(Math.random() * quotes.length)

    quote.innerText=quotes[randomquote].quote
    author.innerText=quotes[randomquote].author
})
 