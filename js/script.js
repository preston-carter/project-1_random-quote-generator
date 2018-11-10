/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

var quotes = [
  {
    quote: 'The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.',
    source: 'Carl Sagan',
    year: '1980',
    citation: 'Cosmos',
  },
  {
    quote: 'We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.',
    source: 'Carl Sagan',
    year: '1990',
    citation: '"Why We Need To Understand Science", The Skeptical Inquirer (Spring)',
  },
  {
    quote: 'Somewhere, something incredible is waiting to be known.',
    source: 'Carl Sagan',
    year: '',
    citation: '',
  },
  {
    quote: 'It has been said that astronomy is a humbling and character building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we’ve ever known.',
    source: 'Carl Sagan',
    year: '1994',
    citation: 'Pale Blue Dot: A Vision of the Human Future in Space',
  },
  {
    quote: 'For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.',
    source: 'Carl Sagan',
    year: '',
    citation: '',
  },
  {
    quote: 'As far as the laws of mathematics refer to reality, they are not certain; and as far as they are certain, they do not refer to reality.',
    source: 'Albert Einstein',
    year: '1921',
    citation: 'Address to Prussian Academy of Sciences',
  },
  {
    quote: 'A hundred times every day I remind myself that my inner and outer life depends on the labors of other men, living and dead, and that I must exert myself in order to give in the measure as I have received and am still receiving.',
    source: 'Albert Einstein',
    year: '',
    citation: '',
  },
  {
    quote: 'A little knowledge is dangerous. So is a lot.',
    source: 'Albert Einstein',
    year: '',
    citation: '',
  },
  {
    quote: 'After a certain high level of technical skill is achieved, science and art tend to coalesce in esthetics, plasticity, and form. The greatest scientists are always artists as well.',
    source: 'Albert Einstein',
    year: '1923',
    citation: '',
  },
  {
    quote: 'Any man who can drive safely while kissing a pretty girl is simply not giving the kiss the attention it deserves.',
    source: 'Albert Einstein',
    year: '',
    citation: '',
  },
  {
    quote: 'I believe in intuition and inspiration. Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution. It is, strictly speaking, a real factor in scientific research.',
    source: 'Albert Einstein',
    year: '1931',
    citation: 'Cosmic Religion: With Other Opinions and Aphorisms',
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: 'Albert Einstein',
    year: '',
    citation: '',
  },
  {
    quote: 'It is said that fact is sometimes stranger than fiction, and nowhere is this more true than in the case of black holes. Black holes are stranger than anything dreamt up by science fiction writers.',
    source: 'Stephen Hawking',
    year: '2008',
    citation: 'In Lecture, "Into a Black Hole"',
  },
  {
    quote: 'The eventual goal of science is to provide a single theory that describes the whole universe.',
    source: 'Stephen Hawking',
    year: '',
    citation: '',
  },
  {
    quote: 'I don’t think there is one unique real universe. ... Even the laws of physics themselves may be somewhat observer dependent.',
    source: 'Stephen Hawking',
    year: '',
    citation: '',
  },
  {
    quote: 'All of my life, I have been fascinated by the big questions that face us, and have tried to find scientific answers to them. If, like me, you have looked at the stars, and tried to make sense of what you see, you too have started to wonder what makes the universe exist.',
    source: 'Stephen Hawking',
    year: '1997',
    citation: "Stephen Hawking's Universe, PBS",
  },
  {
    quote: 'What is there in places almost empty of Matter, and whence is it that the Sun and Planets gravitate towards one another, without dense Matter between them?',
    source: 'Sir Isaac Newton',
    year: '1704',
    citation: 'Opticks, Book 3, Query 28',
  },
  {
    quote: 'Every body perseveres in its state of being at rest or of moving uniformly straight forward, except insofar as it is compelled to change its state by forces impressed',
    source: 'Sir Isaac Newton',
    year: '1687',
    citation: 'The Principia: Mathematical Principles of Natural Philosophy',
  },
  {
    quote: 'If I have seen further it is by standing on the shoulders of giants.',
    source: 'Sir Isaac Newton',
    year: '1675',
    citation: 'Letter to Robert Hooke (5 Feb), The Correspondence of Isaac Newton',
  },
  {
    quote: 'The most remarkable discovery in all of astronomy is that the stars are made of atoms of the same kind as those on the earth.',
    source: 'Richard Feynman',
    year: '1961',
    citation: "In 'Astronomy', The Feynman Lectures on Physics (1961), Vol. 1, 3-6"
  },
  {
    quote: 'For those who want some proof that physicists are human, the proof is in the idiocy of all the different units which they use for measuring energy.',
    source: 'Richard Feynman',
    year: '1967',
    citation: 'The Character of Physical Law',
  },
  {
    quote: 'What we need is imagination, but imagination is a terrible strait-jacket.',
    source: 'Richard Feynman',
    year: '1965',
    citation: 'The Character of Physical Law',
  },
  {
    quote: 'Nothing in life is to be feared, it is only to be understood.',
    source: 'Marie Curie',
    year: '',
    citation: '',
  },
  {
    quote: 'There are two possible outcomes: If the result confirms the hypothesis, then you’ve made a measurement. If the result is contrary to the hypothesis, then you’ve made a discovery.',
    source: 'Enrico Fermi',
    year: '',
    citation: '',
  },
  {
    quote: 'By denying scientific principles, one may maintain any paradox.',
    source: 'Galileo Galilei',
    year: '1615',
    citation: 'Letter to Madame Christina of Lorraine, Grand Duchess of Tuscany: concerning the Use of Biblical Quotations in Matters of Science',
  },
  {
    quote: 'Two truths cannot contradict one another',
    source: 'Galileo Galilei',
    year: '',
    citation: '',
  },
  {
    quote: 'A mathematical truth is timeless, it does not come into being when we discover it. Yet its discovery is a very real event, it may be an emotion like a great gift from a fairy.',
    source: 'Erwin Schrödinger',
    year: '',
    citation: '',
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
  }
];

/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote(array) {
  var randomNum = Math.lower(Math.random() * array.length);
  return randomNum;
}

/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {
var getQuote = quotes[getRandomQuote(quotes)];
for (var props in getQuote) {
  var quoteProps = props.join(', ');
}
var outputDiv = document.getElementById('quote-box');
outputDiv.innerHTML = html;
var html = '';
html += '<p>' + getQuote.quote + '</p>';
html += '<p>' + getQuote.source + '</p>';
if (quoteProps.find('year')){
  html += '<p>' + getQuote.year + '</p>';
}
if (quoteProps.find('citation')){
  html += '<p>' + getQuote.citation + '</p>';
}
return html;
}

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
