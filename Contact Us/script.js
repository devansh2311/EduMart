// fetch('/all')
//     .then(response => response.json())
//     .then(data => {
//         // Handle the received data (e.g., update the page content)
//         console.log(data);
//     })
//     .catch(error => {
//         // Handle any errors
//         console.error('Error:', error);
//     });

fetch('/all')
    .then(response => response.json())
    .then(data => {
        // Handle the received data (e.g., update the page content)
        console.log(data);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });
