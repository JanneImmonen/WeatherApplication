let outcome = document.getElementById("outcome");
let searchButton = document.getElementById("search_button");
let cityRefresh = document.getElementById("city");

// A function to retrieve weather data from the API and display it.
let deliverWeather = () => {
  let valueCity = cityRefresh.value;
  //If the input field is empty, the program asks to enter information.
  if (valueCity.length == 0) {
    outcome.innerHTML = `<h5 class="message">Please could you enter a city name?</h5>`;
  }
  // If the input field is not empty, then the program fetches API data.
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${valueCity}&appid=${key}&units=metric`;
    // Clearing the input field
    cityRefresh.value = "";
    fetch(url)
      .then((resp) => resp.json())
      //If the city name is valid, then:
      .then((data) => {
        /*
        In terms of the operation of the program, not very essential,
        but able to collect data well in the console and see
        the functionality of the software during the development phase of the software.
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        /*
        /* Weather Application JavaScript template. 
        The purpose of this is to create a HTML base with stylesheet and data,
        combined with JavaScript. */
        outcome.innerHTML = `
        <h3>${data.name}</h3>
        <h5 class="weather">${data.weather[0].main}</h5>
        <h5 class="species">${data.weather[0].description}</h5>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h3>${data.main.temp} &#176;</h3>
        <div class="template_container">
            <div>
                <h5 class="caption">min</h5>
                <h5 class="template">${data.main.temp_min}&#176;</h5>
            </div>
            <div>
                <h5 class="caption">max</h5>
                <h5 class="template">${data.main.temp_max}&#176;</h5>
            </div>
        </div>
        `;
      })
      // If the city name is not valid, then then this text will appear.
      .catch(() => {
        outcome.innerHTML = `<h4 class="message">The city is not found</h4>`;
      });
  }
};

searchButton.addEventListener("click", deliverWeather);
window.addEventListener("load", deliverWeather);
