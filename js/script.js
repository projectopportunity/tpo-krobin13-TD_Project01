/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//declare an empty quotes array
let quotes =[];

//set the value that determines the interval for randomly loading quotes
const reloadInterval = 2500; //1000 = 1 second

//load the quote objects
loadQuoteObjects();


//randomly reload the quotes on set interval
reloadPageOnInterval(reloadInterval);


//use an arrow function to secure rgb values for altering the backgrounds
const getRGBValue = (floor, ceiling) => Math.floor((Math.random() * (ceiling - floor)) + floor)+1;




function loadQuoteObjects(){
//add quote objects into the array
   quotes.push({quotation: 'hey lose the day in expectation of the night, and the night in fear of the dawn.', source: 'Seneca', citation: '', year: '' });
   quotes.push({quotation: 'Just keep in mind: the more we value things outside our control, the less control we have. ', displayCount: 0, source: 'Epictetus', citation: '', year: '' });
   quotes.push({quotation: 'It does not matter what you bear, but how you bear it. ', source: 'Seneca',citation: '', year: '' });
   quotes.push({quotation: 'Learn to be indifferent to what makes no difference.', source: ' Marcus Aurelius', displayCount: 0,citation: '', year: '' });
   quotes.push({quotation: 'The more you seek the uncomfortable, the more you will become comfortable. ', displayCount: 0 , source: 'Conor McGregor',citation: '', year: '' });
   quotes.push({quotation: 'Everyone has a plan \'till they get punched in the mouth.', source: 'Mike Tyson', displayCount: 0,citation: '', year: '' });
   quotes.push({quotation: 'Behind every great man is a woman rolling her eyes.', source: 'Jim Carey', displayCount: 0});
   quotes.push({quotation: 'Any man can learn anything he will, but no man can teach except to those who want to learn', displayCount: 0, source: 'Henry Ford',citation: '01/01/1924', year: 'Ford News' });
   quotes.push({quotation: 'Education is preeminently a matter of quality, not amount', source: 'Henry Ford', displayCount: 0 ,citation: '01/01/1924', year: 'Ford News' });
}
/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  //ensure the array length matches with the number of items in the array
  const randomQuoteNumber = Math.floor((Math.random() * quotes.length));
  let selectedQuote = quotes[randomQuoteNumber];

  //ensure all objects have a displayCount property and variable, even if the orginal object doesn't
  if(!selectedQuote.displayCount){
    selectedQuote.displayCount = 1;
  } else {
    selectedQuote.displayCount ++;
  }
  return selectedQuote;
}


/***
 * `printQuote` function
***/
function printQuote(){
    const quote = getRandomQuote();
    let html = `
        <p class="quote"> ${quote.quotation}</p>
        <p class="source"> ${quote.source} `;
    if(quote.citation){
        html += `
          <span class="citation">${quote.citation}</span>`;
    }
    if(quote.year){
        html += `
          <span class="year">${quote.year}</span>`;
    }

    //Displays the number of times the quote has been loaded.
      html += `
          </p>
            <p>Display Count: <span>${quote.displayCount}</span>`;
      html + "</p>";

    document.getElementById('quote-box').innerHTML = html; 
    changeBackgroundColor();
    changeQuoteFontColor();
}

// lets ensure we maintain contrast between the background color and the fonts
// darker colors should be lower on the 255 scale and lighter numbers higher 
// our backgrounds should always be darker than our fonts 
function changeBackgroundColor(){
  document.body.style.backgroundColor = `rgb(${getRGBValue(0,100)}, ${getRGBValue(0,100)} ,${getRGBValue(0,100)})`;
}
function changeQuoteFontColor(){
  document.body.style.color = `rgb(${getRGBValue(130,255)}, ${getRGBValue(130,255)} ,${getRGBValue(130,255)})`;  
}
//this function create the time interval
function reloadPageOnInterval(interval){
  window.setInterval(function(){printQuote()}, interval);
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
