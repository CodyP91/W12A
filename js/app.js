document.getElementById('loadImage').addEventListener('click', function() {
  var dogImageContainer = document.getElementById('dogImageContainer');

  // Display loading message
  dogImageContainer.innerHTML = '<p>Loading...</p>';

  // Make the API call using Axios
  axios.request({
      method: 'get',
      url: 'https://dog.ceo/api/breeds/image/random'
  })
  .then(function(response) {
      // Handle success
      var imageUrl = response.data.message;
      dogImageContainer.innerHTML = '<img src="' + imageUrl + '" alt="Random Dog Image" />';
  })
  .catch(function(error) {
      // Handle error
      dogImageContainer.innerHTML = '<p>An error occurred while fetching the image. Please try again later.</p>';
  });
});