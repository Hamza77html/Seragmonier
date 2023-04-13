fetch('https://example.com/api/data')
  .then(response => response.json())
    .then(data => {
        // Do something with the data, such as assigning it to a variable
            const apiData = data;
              })
                .catch(error => console.error(error));
                const data = {
                    name: 'John Doe',
                      email: 'johndoe@example.com'
                      };

                      axios.post('https://example.com/api/user', data)
                        .then(response => {
                            // Do something with the response data, such as assigning it to a variable
                                const responseData = response.data;
                                  })
                                    .catch(error => console.error(error));
                                    
                }

