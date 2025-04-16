import { getWeatherData } from "./dataWeather.js"

document.addEventListener("DOMContentLoaded", function() {

    const cityInput = document.querySelector(".cityInput")
    const cityButton = document.querySelector(".cityButton")

    cityButton.addEventListener("click", async (event) => {

        event.preventDefault()

        try {
            const values = await getWeatherData(cityInput)
            document.querySelector(".daysWeatherInfo").innerHTML += `
            <div class=daysWeatherInfo-dayZero>
                <p>${values.location}</p>
                <p>${values.days[0].date}</p>
                <p>${values.days[0].conditions}</p>
                <p>${values.days[0].maxTemp}</p>
                <p>${values.days[0].minTemp}</p>
                <p>${values.days[0].precipitationProb}</p>
                <p>${values.days[0].humidity}</p>
                <p>${values.days[0].sunrise}</p>
                <p>${values.days[0].sunset}</p>
                <p>${values.days[0].icon}</p>
                <img src="./assets/icons/${iconDay0}.png" width="200px" alt="">
            </div>
            `
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })
})
