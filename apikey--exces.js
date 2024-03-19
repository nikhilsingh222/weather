// https://api.openweathermap.org/data/2.5/weather?q=London&appid=6edbc28702786d4e8f04ee91a1009d35&units=metric myapikey -------------- 6edbc28702786d4e8f04ee91a1009d35

const exampleOfAPICallkey = {
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [
    { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" },
  ],
  base: "stations",
  main: {
    temp: 18.69,
    feels_like: 18.7,
    temp_min: 16.79,
    temp_max: 20,
    pressure: 1010,
    humidity: 80,
  },
  visibility: 10000,
  wind: { speed: 5.66, deg: 220 },
  clouds: { all: 100 },
  dt: 1689044660,
  sys: {
    type: 2,
    id: 2075535,
    country: "GB",
    sunrise: 1689047750,
    sunset: 1689106538,
  },
  timezone: 3600,
  id: 2643743,
  name: "London",
  cod: 200,
};
