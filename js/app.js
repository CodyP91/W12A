// Get a reference to the button and the activity element
var getActivityButton = document.getElementById("getActivityButton");
var activityElement = document.getElementById("activity");

// Add an event listener to the button
getActivityButton.addEventListener("click", function() {
  // Display a loading message to the user
  activityElement.textContent = "Loading...";

  // Make an Axios call to the Bored API
  axios.get("https://www.boredapi.com/api/activity/")
    .then(function(response) {
      // Display the activity recommendation to the user
      activityElement.textContent = response.data.activity;
    })
    .catch(function(error) {
      // Display an error message to the user
      activityElement.textContent = "Sorry, there was an error getting your activity recommendation.";
      console.log(error);
    });
});
