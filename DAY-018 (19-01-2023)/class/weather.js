const SearchInput = document.getElementById("SearchInput")
const dynamicHeading = document.getElementById("dynamicHeading")
const skyCondition = document.getElementById("skyCondition")
const windSpeed = document.getElementById("windSpeed")
const temerature = document.getElementById("temerature")

async function func() {
    const location = SearchInput.value
    const streamResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`);
    console.log(streamResponse);
    const data = await streamResponse.json()
    console.log(data);
    dynamicHeading.innerText = `weather of ${location}`
    skyCondition.innerText = `Sky copndition: ${data.weather[0].description}`
    temerature.innerText = `temperature: ${data.main.temp}`
    windSpeed.innerText = `windspeed: ${data.wind.speed}`
}