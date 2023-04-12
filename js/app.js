// Add a click event listener to the "loadImage" button
document.getElementById('loadImage').addEventListener('click', function() {
    // Get a reference to the dogImageContainer element
    var dogImageContainer = document.getElementById('dogImageContainer');
    
    // Display a loading message in the dogImageContainer element
    dogImageContainer.innerHTML = '<p>Loading...</p>';
    
    // Make an API call to the dog.ceo API using Axios
    axios.request({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/image/random'
    })
    .then(function(response) {
    // Handle the response from the API call and set the image URL to a variable
    var imageUrl = response.data.message;
    // Set the HTML content of the dogImageContainer element to the image URL wrapped in an img tag
    dogImageContainer.innerHTML = '<img src="' + imageUrl + '" alt="Random Dog Image" />';
    })
    .catch(function(error) {
    // Handle any errors that occurred during the API call and display a message in the dogImageContainer element
    dogImageContainer.innerHTML = '<p>An error occurred while fetching the image. Please try again later.</p>';
    });
    });