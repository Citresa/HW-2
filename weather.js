
// // Comment in for Part 1 - Get Chicago Weather
// let getWeather = function() {
//   let latitude = '41.8781';
//   let longitude = '-87.6298';
//   let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
//   openweathermap_api_url += 'lat=' + latitude
//   openweathermap_api_url += '&lon=' + longitude
//   openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
//   //console.debug ('url: ' + openweathermap_api_url)
//   //console.debug ('Latitude: ' + latitude + 'Longitude: ' + longitude)
//   fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
// }
//
// let link = document.getElementById("get_forecast")
//   link.addEventListener("click", getWeather)
//
// let convertToJSON = function(response) {
//   return response.json();
// }
//
// let updateWeather = function(dataFromService) {
//   console.debug(dataFromService)
//   city = dataFromService.name;
//   temp = dataFromService.main.temp;
//   iconUrl = dataFromService.weather[0].icon;
//   document.querySelector('.card-title').innerHTML = city;
//   document.querySelector('.card-text').innerHTML = "It is " + temp + " degrees outside";
//   document.querySelector('.card-img-top').src = "http://openweathermap.org/img/w/" + iconUrl + ".png";
// }
//
// let displayError = function(error) {
//   console.debug(error);
//   window.alert("Sorry, something went wrong.");
// }
// //End Comment in for Part 1 - Get Chicago Weather



let handlePosition = function(info) {
  //console.info(info)
  latitude = info.coords.latitude.toFixed(4);
  longitude = info.coords.longitude.toFixed(4);
  //console.debug('lat: ' + latitude + ' long: ' + longitude)
}

let getWeather = function() {
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
  console.debug ('latitude: ' + latitude + ' longitude: ' + longitude)
}

let link = document.getElementById("get_forecast")
  link.addEventListener("click", navigator.geolocation.getCurrentPosition(handlePosition))
  link.addEventListener("click", getWeather)

let convertToJSON = function(response) {
  return response.json();
}

let updateWeather = function(dataFromService) {
  //console.debug(dataFromService)
  city = dataFromService.name;
  temp = dataFromService.main.temp;
  iconUrl = dataFromService.weather[0].icon;
  document.querySelector('.card-title').innerHTML = city;
  document.querySelector('.card-text').innerHTML = "It is " + temp + " degrees outside";
  document.querySelector('.card-img-top').src = "http://openweathermap.org/img/w/" + iconUrl + ".png";
}

let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}

// HINT:
// Weather icon example: http://openweathermap.org/img/w/10d.png
// The very last part ('10d.png') can change based on the current conditions.
