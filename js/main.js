import { RESULTS } from './results.js';

// Input field
const inputField = document.getElementById('search');
// Ul element
const resultsArea = document.getElementById('search-results');

/*

Finish this function, it should return a HTML element that looks like this:

<li>
    <article class="search-result">
        <header class="search-result-header search-result-section">
            Cool movie (title)
        </header>
        <div class="search-result-body search-result-section">
            This is some information about this result. (description)
        </div>
    </article>
</li>
*/

// Function for creating the elements who till be displayed
function createResultElement(title, description) {
  const resultsAreaListElement = document.createElement('li');
  resultsAreaListElement.innerHTML = `
  <article class="search-result">
      <header class="search-result-header search-result-section">
          ${title}
      </header>
      <div class="search-result-body search-result-section">
          ${description}
      </div>
  </article>`;
  return resultsArea.appendChild(resultsAreaListElement);
}

// Finish this function
// takes in a string as an argument and searches the "RESULTS" array to find one or many results
// that matches the string.
// should compare the title and description of each result.
//
// This should return an array with all matching results.
function findResult(query) {
  let searchArray = [];
  for (let i = 0; i < RESULTS.length; i++) {
    if (
      RESULTS[i].title.toLowerCase().includes(query.toLowerCase()) ||
      RESULTS[i].description.toLowerCase().includes(query.toLowerCase())
    ) {
      searchArray.push({
        title: RESULTS[i].title,
        description: RESULTS[i].description,
      });
    }
  }
  return searchArray;
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
