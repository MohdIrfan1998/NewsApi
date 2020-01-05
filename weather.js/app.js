var search = document.getElementById("search");
search.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    var getCityName = e.target.value;
  }
  getWeather(getCityName);
});

function getWeather(getCityName) {
  //console.log(getCityName)

  const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&node=json&units=metric&APPID=b1352393415046ef73b194800b9edac1`;
  window
    .fetch(weatherApi)
    .then(data => {
      data
        .json()
        .then(weather => {
          var output = "";
          console.log(weather);
          var weatherData = weather.weather;
          for (let x of weatherData) {
            output += `
            <div class="mt-4 weatherBlock">
            <div class="card-body1">
            <h1>${weather.name}</h1>
            <span class="icon">
            <img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
            <p><span>temp:</span>
            <span class="temp">${weather.main.temp}&deg;c</span>
             </p>
             <span class="des float-left">${x.description}</span>
             
            </div>
            </div>
            `;
            document.getElementById("template").innerHTML = output;

            console.log(x);
            console.log(x.id);
            console.log(x.main);
            console.log(x.description);
            console.log(x.icon);
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}
