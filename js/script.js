/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
Developer: Preston Carter
https://github.com/preston-carter
******************************************/

/***
  Create an array of objects with at least 5 that contain a quote + source
  properties. Additionally, add at least one year/citation properties to at
  least one quote object. Create an extra property to categorize some quotes
  with a relevant emoji for extra credit.
***/

var quotes = [
  {
    quote: 'The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.',
    source: 'Carl Sagan',
    year: '1980',
    citation: 'Cosmos',
    category: '🌌'
  },
  {
    quote: 'We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.',
    source: 'Carl Sagan',
    year: '1990',
    citation: '"Why We Need To Understand Science", The Skeptical Inquirer (Spring)',
    category: '🤔'
  },
  {
    quote: 'Somewhere, something incredible is waiting to be known.',
    source: 'Carl Sagan',
    category: '🌌'
  },
  {
    quote: 'It has been said that astronomy is a humbling and character building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we’ve ever known.',
    source: 'Carl Sagan',
    year: '1994',
    citation: 'Pale Blue Dot: A Vision of the Human Future in Space',
    category: '🌌'
  },
  {
    quote: 'For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.',
    source: 'Carl Sagan',
    category: '🌌'
  },
  {
    quote: 'As far as the laws of mathematics refer to reality, they are not certain; and as far as they are certain, they do not refer to reality.',
    source: 'Albert Einstein',
    year: '1921',
    citation: 'Address to Prussian Academy of Sciences',
    category: '🤔'
  },
  {
    quote: 'A hundred times every day I remind myself that my inner and outer life depends on the labors of other men, living and dead, and that I must exert myself in order to give in the measure as I have received and am still receiving.',
    source: 'Albert Einstein',
    category: '🤔'
  },
  {
    quote: 'A little knowledge is dangerous. So is a lot.',
    source: 'Albert Einstein',
    category: '🤔'
  },
  {
    quote: 'After a certain high level of technical skill is achieved, science and art tend to coalesce in esthetics, plasticity, and form. The greatest scientists are always artists as well.',
    source: 'Albert Einstein',
    year: '1923'
  },
  {
    quote: 'Any man who can drive safely while kissing a pretty girl is simply not giving the kiss the attention it deserves.',
    source: 'Albert Einstein',
    category: '😂'
  },
  {
    quote: 'I believe in intuition and inspiration. Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution. It is, strictly speaking, a real factor in scientific research.',
    source: 'Albert Einstein',
    year: '1931',
    citation: 'Cosmic Religion: With Other Opinions and Aphorisms'
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: 'Albert Einstein',
    category: '😂'
  },
  {
    quote: 'It is said that fact is sometimes stranger than fiction, and nowhere is this more true than in the case of black holes. Black holes are stranger than anything dreamt up by science fiction writers.',
    source: 'Stephen Hawking',
    year: '2008',
    citation: 'In Lecture, "Into a Black Hole"',
    category: '🌌'
  },
  {
    quote: 'The eventual goal of science is to provide a single theory that describes the whole universe.',
    source: 'Stephen Hawking',
    category: '🌌'
  },
  {
    quote: 'I don’t think there is one unique real universe. ... Even the laws of physics themselves may be somewhat observer dependent.',
    source: 'Stephen Hawking',
    category: '🌌'
  },
  {
    quote: 'All of my life, I have been fascinated by the big questions that face us, and have tried to find scientific answers to them. If, like me, you have looked at the stars, and tried to make sense of what you see, you too have started to wonder what makes the universe exist.',
    source: 'Stephen Hawking',
    year: '1997',
    citation: "Stephen Hawking's Universe, PBS",
    category: '🌌'
  },
  {
    quote: 'What is there in places almost empty of Matter, and whence is it that the Sun and Planets gravitate towards one another, without dense Matter between them?',
    source: 'Sir Isaac Newton',
    year: '1704',
    citation: 'Opticks, Book 3, Query 28',
    category: '🌌'
  },
  {
    quote: 'Every body perseveres in its state of being at rest or of moving uniformly straight forward, except insofar as it is compelled to change its state by forces impressed',
    source: 'Sir Isaac Newton',
    year: '1687',
    citation: 'The Principia: Mathematical Principles of Natural Philosophy'
  },
  {
    quote: 'If I have seen further it is by standing on the shoulders of giants.',
    source: 'Sir Isaac Newton',
    year: '1675',
    citation: 'Letter to Robert Hooke (5 Feb), The Correspondence of Isaac Newton'
  },
  {
    quote: 'The most remarkable discovery in all of astronomy is that the stars are made of atoms of the same kind as those on the earth.',
    source: 'Richard Feynman',
    year: '1961',
    citation: "In 'Astronomy', The Feynman Lectures on Physics (1961), Vol. 1, 3-6",
    category: '🌌'
  },
  {
    quote: 'For those who want some proof that physicists are human, the proof is in the idiocy of all the different units which they use for measuring energy.',
    source: 'Richard Feynman',
    year: '1967',
    citation: 'The Character of Physical Law',
    category: '😂'
  },
  {
    quote: 'What we need is imagination, but imagination is a terrible strait-jacket.',
    source: 'Richard Feynman',
    year: '1965',
    citation: 'The Character of Physical Law',
    category: '😂'
  },
  {
    quote: 'Nothing in life is to be feared, it is only to be understood.',
    source: 'Marie Curie',
    category: '🔬'
  },
  {
    quote: 'There are two possible outcomes: If the result confirms the hypothesis, then you’ve made a measurement. If the result is contrary to the hypothesis, then you’ve made a discovery.',
    source: 'Enrico Fermi',
    category: '🔬'
  },
  {
    quote: 'By denying scientific principles, one may maintain any paradox.',
    source: 'Galileo Galilei',
    year: '1615',
    citation: 'Letter to Madame Christina of Lorraine, Grand Duchess of Tuscany: concerning the Use of Biblical Quotations in Matters of Science'
  },
  {
    quote: 'Two truths cannot contradict one another',
    source: 'Galileo Galilei',
    category: '🤔'
  },
  {
    quote: 'A mathematical truth is timeless, it does not come into being when we discover it. Yet its discovery is a very real event, it may be an emotion like a great gift from a fairy.',
    source: 'Erwin Schrödinger',
    category: '🤔'
  },
  {
    quote: 'The scientist only imposes two things, namely truth and sincerity, imposes them upon himself and upon other scientists.',
    source: 'Erwin Schrödinger',
    year: '1956',
    citation: "Lecture, 'The Principle of Objectivation', the Tarner Lectures Delivered at Trinity College, Cambridge"
  },
  {
    quote: 'If you cannot — in the long run — tell everyone what you have been doing, your doing has been worthless.',
    source: 'Erwin Schrödinger',
    year: '1950',
    citation: "Concluding remark of 'The Spiritual Bearing of Science on Life' lectures for the Dublin Institute for Advanced Studies at University College, Dublin",
    category: '😂'
  }
];

/***
  Create the `getRandomQuote` function to:
    - Generate/return a random number limited to the maximum number of quotes.
***/

function getRandomQuote(array) {
  return Math.floor(Math.random() * array.length);
}

/***
  Create the `getRandomRBG` function to:
   - Generate/return a random RGB value
***/

function getRandomRGB() {
  return Math.floor(Math.random() * 256 );
}

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Build html string while checking if each quote contains each possible
     property
   - Set the `innerHTML` of the `quote-box` div to the new quote's HTML string.
***/

function printQuote() {
  //Call `getRandomQuote` and assign to `getQuote`
  var getQuote = quotes[getRandomQuote(quotes)];
    //Initialize variable to store our quote/property html expression
    var html = '';
    //Every quote will have quote + source properties.. add to html string.
    html += '<p class="quote">' + getQuote.quote + '</p>' + '<p class="source">' + getQuote.source;
    //Check if quote has citation property, if so add to html string.
    if (getQuote.hasOwnProperty('citation')) {
      html += '<span class="citation">' + getQuote.citation + '</span>';
    }
    //Check if quote has year property, if so add to html string
    if (getQuote.hasOwnProperty('year')) {
      html += '<span class="year">' + getQuote.year + '</span>';
    }
    //Check if quote has category property, if so add to html string
    if (getQuote.hasOwnProperty('category')) {
      html += getQuote.category;
    }
    //Close html 2nd <p> of html string to keep all secondary props on same line.
    html += '</p>';
    //Reference the html container for the qutoe and output the quote and corresponding properties!
    var outputQuote = document.getElementById('quote-box');
    outputQuote.innerHTML = html;
    return outputQuote;
}

/***
  Create the `changeBackgroundColor` function to:
   - Call the `getRandomRGB` function 3x and assign it to a variable in order to generate a random background color for the body in RGB values.
   - Set the body and button background to the new RGB color.
***/

function changeBackgroundColor() {
  //Call `getRandomRBG` 3x and assign to `backgroundRGB`: rbg(x,x,x) values.
  var backgroundRGB = 'rgb(' + getRandomRGB() + ',' + getRandomRGB() + ',' + getRandomRGB() + ')';
  //Reference the body background color and store new value.
  var outputColor = document.body.style.background = backgroundRGB;
  //Reference button background color and set it = to new background color.
  var buttonColor = document.getElementById('loadQuote').style.background = outputColor;
  //Return the new color!
  return outputColor, buttonColor;
}

/***
  When the "Show another quote" button is clicked, the event listeners
  below will be triggered, calling the `printQuote` + `changeBackgroundColor`
  functions. Also, create a timed interval to load a quote every 30 seconds regardless of whether or not the "Show another quote" button is clicked.
***/

//Print quote!
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//And change the background color!
document.getElementById('loadQuote').addEventListener("click", changeBackgroundColor, false);
//Init interval timer
setInterval(function() {
  //Load new quote + background color!
  printQuote();
  changeBackgroundColor();
}, 30000);
