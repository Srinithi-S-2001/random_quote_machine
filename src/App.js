import React,{useState} from 'react';
import './App.scss';
import {quotes,colors} from './quotes.js';
function App() {
  const [quote, setQuote] = useState("I you do what you’ve always done, you’ll get what you’ve always gotten.");
  const [author, setAuthor] = useState("Tony Robbins");
  const [randomNumber, setRandomNumber] = useState(0);
  const[accentColor, setAccentColor] = useState('#282c34');
  const changeQuoteAndAuthor =()=>{
    const rand=Math.floor(Math.random()*quotes.length)
    setQuote(quotes[rand].quote);
    setAuthor(quotes[rand].author);
    setAccentColor(colors[rand]);
    setRandomNumber(rand);
  }
  return (
    <div className="App" >
      <header className="App-header" style={{backgroundColor:accentColor,color:accentColor}}>
        <div id="quote-box" style={{color:accentColor}}>
          <p id="text">
          <i class="fa fa-quote-left">&nbsp;&nbsp;</i>{quote}
          </p>
          <p id="author">
            -{author}
          </p>
          <a id="tweet-quote" style={{backgroundColor:accentColor}} href={encodeURI(`https://twitter.com/intent/tweet?text=${quote}-${author}`)}><i class="fa fa-twitter"></i></a>
          <button style={{backgroundColor:accentColor}} onClick={()=>changeQuoteAndAuthor()} id="new-quote">New Quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
