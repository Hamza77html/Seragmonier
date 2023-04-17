const surahUrl = 'http://api.alquran.cloud/v1/surah/114';

fetch(surahUrl)
  .then(response => response.json())
    .then(data => {
        const surahName = data.data.englishName;
            const verses = data.data.ayahs;
                
                    document.querySelector('.surah-name').textContent = surahName;
                        
                            const versesContainer = document.querySelector('.verses');
                                
                                    verses.forEach((verse) => {
                                            const verseText = verse.text;
                                                    const verseNumber = verse.numberInSurah;
                                                            
                                                                    const verseElement = document.createElement('div');
                                                                            verseElement.classList.add('verse');
                                                                                    
                                                                                            const verseNumberElement = document.createElement('span');
                                                                                                    verseNumberElement.classList.add('verse-number');
                                                                                                            verseNumberElement.textContent = `${verseNumber}. `;
                                                                                                                    
                                                                                                                            const verseTextElement = document.createElement('span');
                                                                                                                                    verseTextElement.classList.add('verse-text');
                                                                                                                                            verseTextElement.textContent = verseText;
                                                                                                                                                    
                                                                                                                                                            verseElement.appendChild(verseNumberElement);
                                                                                                                                                                    verseElement.appendChild(verseTextElement);
                                                                                                                                                                            versesContainer.appendChild(verseElement);
                                                                                                                                                                                });
                                                                                                                                                                                  })
                                                                                                                                                                                    .catch(error => console.log(error));
                                                                                                                                                                                    
      
                                                    
                                                              

                                                                  
                                                                              
                                                                                     
                                                                                                        

                                                                                                        
                                                                                                                

                                                                                                                  
                                                                                                                              

                                                                                                                                
                                                                                                                                      
                                                                                                                                            
                                                                                                                                              
                                                                                                                                                                    

                                                                                                                                                                  
                                                                                                                                                                          
                                                                                                                                                                                
                                                                                                                                                                                          
                                                                                                                                                                                        
                                                              
                                                                                                                                                                                                      
                                                                                                                                                                                                      
                                                                                                                                                                                                      
                                                                                                                                                                                          
                                                                                                                                                                                                  
                                                                                                                                                                                                                
                                                                                                                                                                                                                  
                                                                                                                                                                                                                  
            
                    
                          
                                  
                                          
                                      
                                              

        
        
            
              
            
                  
              
                      

              
                        
                                    
                

