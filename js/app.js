const API_Key = `bcc7ca3d02107c51883abd0065405bed`;
const loadWeatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
loadWeatherData('dhaka')