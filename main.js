fetch('https://api.aladhan.com/v1/timingsByCity/13-04-2023?city=cairo&country=egypt&method=8')
  .then(response => response.json())
    .then(data => document.write(data))
      .catch(error => console.error(error));

