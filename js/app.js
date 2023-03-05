const API_Key = `bcc7ca3d02107c51883abd0065405bed`;
const loadWeatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

const displayWeather = (data) => {
    setInnerText('temp', data.main.temp)
    setInnerText('clouds', data.weather[0].main)
}

//set innerText
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text
}

document.getElementById('search-btn').addEventListener('click', function () {
    const searchValue = document.getElementById('search-filed').value;
    setInnerText('cityName', searchValue)
    loadWeatherData(searchValue)
})
// loadWeatherData('dhaka')