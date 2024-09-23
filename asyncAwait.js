// Async/Await is a syntactic sugar for working with promises in a cleaner way.

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  }
  