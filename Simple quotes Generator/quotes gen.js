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
    {
        quote:`“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”`,
        author:` William W. Purkey`
    },
    {
        quote:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        author:` Dr. Seuss`
    },  {
        quote:`“You only live once, but if you do it right, once is enough.”`,
        author:` Mae West`
    },  {
        quote:`“Be the change that you wish to see in the world.”`,
        author:`Mahatma Gandhi`
    },  {
        quote:`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
        author:` J.K. Rowling, Harry Potter and the Goblet of Fire`
    },  {
        quote:`Friendship ... is born at the moment when one man says to another What! You
        “Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
        author:` C.S. Lewis, The Four Loves`
    },  {
        quote:`“To live is the rarest thing in the world. Most people exist, that is all.”`,
        author:`Oscar Wilde`
    },  {
        quote:`“I am so clever that sometimes I don't understand a single word of what I am saying.”`,
        author:` Oscar Wilde, The Happy Prince and Other Stories`
    },

]

newquote.addEventListener('click',function(){
    let randomquote=Math.floor(Math.random() * quotes.length)

    quote.innerText=quotes[randomquote].quote
    author.innerText=quotes[randomquote].author
})
 