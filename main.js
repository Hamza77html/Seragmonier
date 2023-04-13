fetch('https://api.aladhan.com/v1/timingsByCity/13-04-2023?city=cairo&country=egypt&method=8')
  .then(response => response.json(response))
    .then(data => console.log(data))
      .catch(error => console.error(error));

