import { getWeatherData } from "./dataWeather.js"

document.addEventListener("DOMContentLoaded",  function() {

    try  {
        const cityInput = document.querySelector(".cityInput")
        const cityButton = document.querySelector(".cityButton")
        
        cityButton.addEventListener("click", async (event) => {

            event.preventDefault()

            const city = cityInput.value.trim()
            const values = await getWeatherData(city)
            
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
                <img src="./assets/icons/${values.days[0].icon}.png" alt="weather's icon">
            </div>
            `
        })
    } catch (error) {
        alert(`Error: ${error}`)
    }
})
