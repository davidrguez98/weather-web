import { getWeatherData } from "./dataWeather.js"

const values = await (getWeatherData("Madrid"))


const location = values.location

// Día 0
const dateDay0 = values.days[0].date
const conditionsDay0 = values.days[0].conditions
const maxTempDay0 = values.days[0].maxTemp
const minTempDay0 = values.days[0].minTemp
const precipitationProbDay0 = values.days[0].precipitationProb
const humidityDay0 = values.days[0].humidity
const sunriseDay0 = values.days[0].sunrise
const sunsetDay0 = values.days[0].sunset
const iconDay0 = values.days[0].icon

// Día 1
const dateDay1 = values.days[1].date
const conditionsDay1 = values.days[1].conditions
const maxTempDay1 = values.days[1].maxTemp
const minTempDay1 = values.days[1].minTemp
const precipitationProbDay1 = values.days[1].precipitationProb
const humidityDay1 = values.days[1].humidity
const sunriseDay1 = values.days[1].sunrise
const sunsetDay1 = values.days[1].sunset
const iconDay1 = values.days[1].icon

// Día 2
const dateDay2 = values.days[2].date
const conditionsDay2 = values.days[2].conditions
const maxTempDay2 = values.days[2].maxTemp
const minTempDay2 = values.days[2].minTemp
const precipitationProbDay2 = values.days[2].precipitationProb
const humidityDay2 = values.days[2].humidity
const sunriseDay2 = values.days[2].sunrise
const sunsetDay2 = values.days[2].sunset
const iconDay2 = values.days[2].icon

// Día 3
const dateDay3 = values.days[3].date
const conditionsDay3 = values.days[3].conditions
const maxTempDay3 = values.days[3].maxTemp
const minTempDay3 = values.days[3].minTemp
const precipitationProbDay3 = values.days[3].precipitationProb
const humidityDay3 = values.days[3].humidity
const sunriseDay3 = values.days[3].sunrise
const sunsetDay3 = values.days[3].sunset
const iconDay3 = values.days[3].icon

// Día 4
const dateDay4 = values.days[4].date
const conditionsDay4 = values.days[4].conditions
const maxTempDay4 = values.days[4].maxTemp
const minTempDay4 = values.days[4].minTemp
const precipitationProbDay4 = values.days[4].precipitationProb
const humidityDay4 = values.days[4].humidity
const sunriseDay4 = values.days[4].sunrise
const sunsetDay4 = values.days[4].sunset
const iconDay4 = values.days[4].icon

// Día 5
const dateDay5 = values.days[5].date
const conditionsDay5 = values.days[5].conditions
const maxTempDay5 = values.days[5].maxTemp
const minTempDay5 = values.days[5].minTemp
const precipitationProbDay5 = values.days[5].precipitationProb
const humidityDay5 = values.days[5].humidity
const sunriseDay5 = values.days[5].sunrise
const sunsetDay5 = values.days[5].sunset
const iconDay5 = values.days[5].icon

// Día 6
const dateDay6 = values.days[6].date
const conditionsDay6 = values.days[6].conditions
const maxTempDay6 = values.days[6].maxTemp
const minTempDay6 = values.days[6].minTemp
const precipitationProbDay6 = values.days[6].precipitationProb
const humidityDay6 = values.days[6].humidity
const sunriseDay6 = values.days[6].sunrise
const sunsetDay6 = values.days[6].sunset
const iconDay6 = values.days[6].icon


document.addEventListener("DOMContentLoaded", async function() {

    const values = await (getWeatherData("Madrid"))
    console.log(values)
    console.log("alskdjal")

    const location = values.location
    console.log(location)


    const dateDay0 = values.days[0].date
    const conditionsDay0 = values.days[0].conditions
    const maxTempDay0 = values.days[0].maxTemp
    const minTempDay0 = values.days[0].minTemp
    const precipitationProbDay0 = values.days[0].precipitationProb
    const humidityDay0 = values.days[0].humidity
    const sunriseDay0 = values.days[0].sunrise
    const sunsetDay0 = values.days[0].sunset
    const iconDay0 = values.days[0].icon

    document.querySelector(".daysWeatherInfo").innerHTML += `
    <div>
        <p>${dateDay0}</p>
        <p>${conditionsDay0}</p>
        <p>${maxTempDay0}</p>
        <p>${minTempDay0}</p>
        <p>${precipitationProbDay0}</p>
        <p>${humidityDay0}</p>
        <p>${sunriseDay0}</p>
        <p>${sunsetDay0}</p>
        <p>${iconDay0}</p>
    </div>
        `
})