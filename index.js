function submitData(name, email) {
    // Define the data object with name and email
    const data = {
      name: name,
      email: email
    };
  
    // Return the fetch chain
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(parsedData => {
        // Access the newly assigned id and append it to the DOM
        const newId = parsedData.id;
        document.body.innerHTML += `<p>New ID: ${newId}</p>`;
      })
      .catch(error => {
        // Handle errors by appending the error message to the DOM
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
  