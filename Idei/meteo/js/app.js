function PageLoaded() {
    let long = 0.0;
    let lat = 0.0;
    let temperatureCelEl = document.getElementById("tempCelsius");
    let temperatureFahrEl = document.getElementById("tempFahrenheit");
    let windSpeedEl = document.getElementById("windSpeed");
    let precipEl = document.getElementById("precip");
    let summaryEl = document.getElementById("summary");
    let titleEl = document.getElementById("titlu");
    let titleEls = document.getElementsByTagName("title");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                long = position.coords.longitude;
                lat = position.coords.latitude;

                const proxy = "https://cors-anywhere.herokuapp.com/"
                const api = `${proxy}https://api.darksky.net/forecast/dcb0df150dffdad61fe732f6d49ffc47/${lat},${long}`;
                console.log(api);
                fetch(api)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data.currently);
                        const { temperature, summary, windSpeed, precipIntensity } = data.currently;
                        const temperatureC = toCelsius(temperature);
                        summaryEl.innerHTML = summary;
                        temperatureCelEl.innerHTML = temperatureC.toFixed(0) + " °C";
                        temperatureFahrEl.innerHTML = temperature.toFixed(0) + " °F";
                        windSpeedEl.innerHTML = windSpeed + " Km/h";
                        precipEl.innerHTML = precipIntensity + " mm/mp";
                        titleEl.innerHTML = "Vremea in " + data.timezone;
                        titleEls[0].innerHTML = "Vremea in " + data.timezone;
                    });
            }
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
} 