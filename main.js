const prayerTimings = document.getElementById('prayer-timings');

fetch('https://api.aladhan.com/v1/timingsByCity/15-04-2023?city=cairo&country=egypt&method=8')
  .then(response => response.json())
    .then(data => {
        const date = document.createElement('h2');
            date.textContent = data.date.readable;
                prayerTimings.appendChild(date);

                    for (const prayerName in data.timings) {
                          const prayerTime = document.createElement('p');
                                prayerTime.textContent = `${prayerName}: ${data.timings[prayerName]}`;
                                      prayerTimings.appendChild(prayerTime);
                                          }
                                            })
                                              .catch(error => console.error(error));
                                              

        
        
            
              
            
                  
              
                      

              
                        
                                    
                

