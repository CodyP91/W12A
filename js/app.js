var getActivityButton = document.getElementById("getActivityButton");
var activityElement = document.getElementById("activity");

getActivityButton.addEventListener("click", function() {
 
  activityElement.textContent = "Loading...";
  axios.get("https://www.boredapi.com/api/activity/")
    .then(function(response) {
  
      activityElement.textContent = response.data.activity;
    })
    .catch(function(error) {
  
      activityElement.textContent = "Sorry, there was an error getting your activity recommendation.";
      console.log(error);
    });
});
