const prayerTimingsForm = document.getElementById('prayer-timings-form');
const prayerTimings = document.getElementById('prayer-timings');

prayerTimingsForm.addEventListener('submit', event => {
  event.preventDefault();

    const city = document.getElementById('city').value;
      const country = document.getElementById('country').value;
        const method = document.getElementById('method').value;

          const endpointUrl = `https://api.aladhan.com/v1/timingsByCity/${getCurrentDate()}?city=${city}&country=${country}&method=${method}`;

            fetch(endpointUrl)
                .then(response => response.json())
                    .then(data => {
                          const date = document.createElement('h2');
                                date.textContent = data.date.readable;
                                      prayerTimings.innerHTML = '';
                                            prayerTimings.appendChild(date);

                                                  const table = document.createElement('table');
                                                        const tableHeader = document.createElement('thead');
                                                              const tableHeaderRow = document.createElement('tr');
                                                                    const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

                                                                          prayerNames.forEach(prayerName => {
                                                                                  const headerCell = document.createElement('th');
                                                                                          headerCell.textContent = prayerName;
                                                                                                  tableHeaderRow.appendChild(headerCell);
                                                                                                        });

                                                                                                              tableHeader.appendChild(tableHeaderRow);
                                                                                                                    table.appendChild(tableHeader);

                                                                                                                          const tableBody = document.createElement('tbody');
                                                                                                                                const timingsRow = document.createElement('tr');

                                                                                                                                      prayerNames.forEach(prayerName => {
                                                                                                                                              const timingCell = document.createElement('td');
                                                                                                                                                      timingCell.textContent = data.data.timings[prayerName.toLowerCase()];
                                                                                                                                                              timingsRow.appendChild(timingCell);
                                                                                                                                                                    });

                                                                                                                                                                          tableBody.appendChild(timingsRow);
                                                                                                                                                                                table.appendChild(tableBody);
                                                                                                                                                                                      prayerTimings.appendChild(table);
                                                                                                                                                                                          })
                                                                                                                                                                                              .catch(error => {
                                                                                                                                                                                                    prayerTimings.textContent = `Error: ${error.message}`;
                                                                                                                                                                                                        });
                                                                                                                                                                                                        });

                                                                                                                                                                                                        function getCurrentDate() {
                                                                                                                                                                                                          const currentDate = new Date();
                                                                                                                                                                                                            const year = currentDate.getFullYear();
                                                                                                                                                                                                              const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
                                                                                                                                                                                                                const day = currentDate.getDate().toString().padStart(2, '0');
                                                                                                                                                                                                                  return `${day}-${month}-${year}`;
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                  
            
                    
                          
                                  
                                          
                                      
                                              

        
        
            
              
            
                  
              
                      

              
                        
                                    
                

