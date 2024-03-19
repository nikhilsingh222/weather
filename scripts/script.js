let weather = {
  apiKey: "6edbc28702786d4e8f04ee91a1009d35",
  fetchWeather: function (city) {
    fetch(
      `  https://api.openweathermap.org/data/2.5/weather?q=${city}
        &units=metric&appid=${this.apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found of this place.");
          throw new Error("No weather found of this place.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, temp, description, speed); //India 04d 26.02 broken clouds 1.54

    
    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(
      ".icon"
    ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector(".description").innerText = `${description}`;
    document.querySelector(".temp").innerHTML = `${temp} <span>&degC</span> `;
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Wind Speed: ${speed}km/s`;

    
    document.querySelector(".weather").classList.remove("loading");

    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};


document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    weather.search();
  }
});
weather.fetchWeather("nagarkot");
