/**
 * # Quote of the Day

## Make a quote of the day generator

1. Create a function that returns a random quote from the array of quotes that's given below. Note: Sometimes 
it's a good idea to create multiple functions, that do one specific thing 
only to make the code more readable and easier to maintain / extend. 
If you think they can be useful, put some comments to document your code.

2. The user should be able to click a "Random Quote" button to generate one of your quotes. **See image for reference**
 */
const quotes = [
  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  "Don't watch the clock; do what it does. Keep going.",
  "The secret of getting ahead is getting started.",
  "Well done is better than well said.",
  "You miss 100% of the shots you don’t take.",
  "A goal is a dream with a deadline.",
  "Outstanding people have one thing in common: An absolute sense of mission.",
  "Trying is winning in the moment.",
  "Fall down seven times and stand up eight.",
  "You just can't beat the person who never gives up.",
  "There is little success where there is little laughter.",
  "We cannot solve our problems with the same thinking we used when we created them.",
];

document.querySelector("button").addEventListener("click", () => {
  let output = document.querySelector("#output");
  quotes.forEach((element) => {
    output.innerHTML += `${element}`;
  });
});
