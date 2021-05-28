import { RESULTS } from './results.js';

// Input field
const inputField = document.getElementById('search');
// Ul element
const resultsArea = document.getElementById('search-results');

// Function for creating the elements who till be displayed
function createResultElement(title, description) {
  console.log('This function is not implemented.');
}

// Finish this function
// takes in a string as an argument and searches the "RESULTS" array to find one or many results
// that matches the string.
// should compare the title and description of each result.
//
// This should return an array with all matching results.
function findResult(query) {
  // En simpel for stats som jag skapat som kollar om ett objekts titel innehåller det som är inskrivet i input fältet. (Dock är jag osäker om denna funkar som den ska, det vet jag först när jag skapat så att det displayas ut i html filen)
  let searchArray = [];
//   for (let i = 0; i < RESULTS.length; i++) {
//     if (
//       RESULTS[i].title.toLowerCase().includes(query.toLowerCase()) ||
//       RESULTS[i].description.toLowerCase().includes(query.toLowerCase())
//     ) {
//       searchArray.push(RESULTS[i].title);
//     }
//   }

  for (let i = 0; i < RESULTS.length; i++) {
    if (RESULTS[i].description.toLowerCase().includes(query.toLowerCase())) {
      searchArray.push(RESULTS[i].title);
    }
  }
  console.log(searchArray);
}

inputField.addEventListener('keyup', function (event) {
  // search for results
  const results = findResult(event.target.value);

  // clear previous results
  resultsArea.innerHTML = '';

  // convert all results objects to HTML elements and push them to our "resultsArea" div.
  if (results) {
    results.forEach((result) =>
      resultsArea.appendChild(
        createResultElement(result.title, result.description)
      )
    );
  } else {
    console.log('No results.');
  }
});
