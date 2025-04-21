import { getWeatherData } from "./dataWeather.js"

export async function getWeatherMainCity() {

    const values = await getWeatherData("Madrid")
            
        document.querySelector(".daysWeatherInfo").innerHTML = `
        <h2>Weather in ${values.location}</h2>
        <table>
            <tr>
                <th class="mainColumn">Dates</th>
                <th>${values.days[0].date}</th>
                <th>${values.days[1].date}</th>
                <th>${values.days[2].date}</th>
                <th>${values.days[3].date}</th>
                <th>${values.days[4].date}</th>
                <th>${values.days[5].date}</th>
                <th>${values.days[6].date}</th>
            </tr>
            <tr>
                <th class="mainColumn">Conditions</th>
                <td><p>${values.days[0].conditions}</p></td>
                <td><p>${values.days[1].conditions}</p></td>
                <td><p>${values.days[2].conditions}</p></td>
                <td><p>${values.days[3].conditions}</p></td>
                <td><p>${values.days[4].conditions}</p></td>
                <td><p>${values.days[5].conditions}</p></td>
                <td><p>${values.days[6].conditions}</p></td>
            </tr>
            <tr>
                <th class="mainColumn">Max temperature</th>
                <td><p>${values.days[0].maxTemp}</p></td>
                <td><p>${values.days[1].maxTemp}</p></td>
                <td><p>${values.days[2].maxTemp}</p></td>
                <td><p>${values.days[3].maxTemp}</p></td>
                <td><p>${values.days[4].maxTemp}</p></td>
                <td><p>${values.days[5].maxTemp}</p></td>
                <td><p>${values.days[6].maxTemp}</p></td>
            </tr>
            <tr>
                <th class="mainColumn">Min temperature</th>
                <td><p>${values.days[0].minTemp}</p></td>
                <td><p>${values.days[1].minTemp}</p></td>
                <td><p>${values.days[2].minTemp}</p></td>
                <td><p>${values.days[3].minTemp}</p></td>
                <td><p>${values.days[4].minTemp}</p></td>
                <td><p>${values.days[5].minTemp}</p></td>
                <td><p>${values.days[6].minTemp}</p></td>
            </tr>
            <tr>
                <th class="mainColumn">Rain</th>
                <td><p>${values.days[0].precipitationProb}</p></td>
                <td><p>${values.days[1].precipitationProb}</p></td>
                <td><p>${values.days[2].precipitationProb}</p></td>
                <td><p>${values.days[3].precipitationProb}</p></td>
                <td><p>${values.days[4].precipitationProb}</p></td>
                <td><p>${values.days[5].precipitationProb}</p></td>
                <td><p>${values.days[6].precipitationProb}</p></td>
            </tr>
            <tr>
                <th class="mainColumn">Humidity</th>
                <td><p>${values.days[0].humidity}</p></td>
                <td><p>${values.days[1].humidity}</p></td>
                <td><p>${values.days[2].humidity}</p></td>
                <td><p>${values.days[3].humidity}</p></td>
                <td><p>${values.days[4].humidity}</p></td>
                <td><p>${values.days[5].humidity}</p></td>
                <td><p>${values.days[6].humidity}</p></td>
            </tr>
            <tr>
                <th class="mainColumn"><i class="bi bi-sunrise-fill"></i></th>
                <td><p>${values.days[0].sunrise}</p></td>
                <td><p>${values.days[1].sunrise}</p></td>
                <td><p>${values.days[2].sunrise}</p></td>
                <td><p>${values.days[3].sunrise}</p></td>
                <td><p>${values.days[4].sunrise}</p></td>
                <td><p>${values.days[5].sunrise}</p></td>
                <td><p>${values.days[6].sunrise}</p></td>
            </tr>
            <tr>
                <th class="mainColumn"><i class="bi bi-sunset-fill"></i></th>
                <td><p>${values.days[0].sunset}<p></td>
                <td><p>${values.days[1].sunset}</p></td>
                <td><p>${values.days[2].sunset}</p></td>
                <td><p>${values.days[3].sunset}</p></td>
                <td><p>${values.days[4].sunset}</p></td>
                <td><p>${values.days[5].sunset}</p></td>
                <td><p>${values.days[6].sunset}</p></td>
            </tr>
            <tr>
                <th></th>
                <td><p><img src="./assets/icons/${values.days[0].icon}.png" alt="weather's icon"></p></td>
                <td><p><img src="./assets/icons/${values.days[1].icon}.png" alt="weather's icon"></p></td>
                <td><p><img src="./assets/icons/${values.days[2].icon}.png" alt="weather's icon"></p></td>
                <td><p><img src="./assets/icons/${values.days[3].icon}.png" alt="weather's icon"></p></td>
                <td><p><img src="./assets/icons/${values.days[4].icon}.png" alt="weather's icon"></p></td>
                <td><p><img src="./assets/icons/${values.days[5].icon}.png" alt="weather's icon"></p></td>
                <td><p><img src="./assets/icons/${values.days[6].icon}.png" alt="weather's icon"></p></td>
            </tr>
        </table>
        `
}

export async function getWeatherDataClick() {

    const cityInput = document.querySelector(".cityInput")
        const cityButton = document.querySelector(".cityButton")
        
        cityButton.addEventListener("click", async (event) => {

            event.preventDefault()

            const city = cityInput.value.trim()
            const values = await getWeatherData(city)
            
            document.querySelector(".daysWeatherInfo").innerHTML = `
            <h2>Weather in ${values.location}</h2>
            <table>
                <tr>
                    <th class="mainColumn">Dates</th>
                    <th>${values.days[0].date}</th>
                    <th>${values.days[1].date}</th>
                    <th>${values.days[2].date}</th>
                    <th>${values.days[3].date}</th>
                    <th>${values.days[4].date}</th>
                    <th>${values.days[5].date}</th>
                    <th>${values.days[6].date}</th>
                </tr>
                <tr>
                    <th class="mainColumn">Conditions</th>
                    <td><p>${values.days[0].conditions}</p></td>
                    <td><p>${values.days[1].conditions}</p></td>
                    <td><p>${values.days[2].conditions}</p></td>
                    <td><p>${values.days[3].conditions}</p></td>
                    <td><p>${values.days[4].conditions}</p></td>
                    <td><p>${values.days[5].conditions}</p></td>
                    <td><p>${values.days[6].conditions}</p></td>
                </tr>
                <tr>
                    <th class="mainColumn">Max temperature</th>
                    <td><p>${values.days[0].maxTemp}</p></td>
                    <td><p>${values.days[1].maxTemp}</p></td>
                    <td><p>${values.days[2].maxTemp}</p></td>
                    <td><p>${values.days[3].maxTemp}</p></td>
                    <td><p>${values.days[4].maxTemp}</p></td>
                    <td><p>${values.days[5].maxTemp}</p></td>
                    <td><p>${values.days[6].maxTemp}</p></td>
                </tr>
                <tr>
                    <th class="mainColumn">Min temperature</th>
                    <td><p>${values.days[0].minTemp}</p></td>
                    <td><p>${values.days[1].minTemp}</p></td>
                    <td><p>${values.days[2].minTemp}</p></td>
                    <td><p>${values.days[3].minTemp}</p></td>
                    <td><p>${values.days[4].minTemp}</p></td>
                    <td><p>${values.days[5].minTemp}</p></td>
                    <td><p>${values.days[6].minTemp}</p></td>
                </tr>
                <tr>
                    <th class="mainColumn">Rain</th>
                    <td><p>${values.days[0].precipitationProb}</p></td>
                    <td><p>${values.days[1].precipitationProb}</p></td>
                    <td><p>${values.days[2].precipitationProb}</p></td>
                    <td><p>${values.days[3].precipitationProb}</p></td>
                    <td><p>${values.days[4].precipitationProb}</p></td>
                    <td><p>${values.days[5].precipitationProb}</p></td>
                    <td><p>${values.days[6].precipitationProb}</p></td>
                </tr>
                <tr>
                    <th class="mainColumn">Humidity</th>
                    <td><p>${values.days[0].humidity}</p></td>
                    <td><p>${values.days[1].humidity}</p></td>
                    <td><p>${values.days[2].humidity}</p></td>
                    <td><p>${values.days[3].humidity}</p></td>
                    <td><p>${values.days[4].humidity}</p></td>
                    <td><p>${values.days[5].humidity}</p></td>
                    <td><p>${values.days[6].humidity}</p></td>
                </tr>
                <tr>
                    <th class="mainColumn"><i class="bi bi-sunrise-fill"></i></th>
                    <td><p>${values.days[0].sunrise}</p></td>
                    <td><p>${values.days[1].sunrise}</p></td>
                    <td><p>${values.days[2].sunrise}</p></td>
                    <td><p>${values.days[3].sunrise}</p></td>
                    <td><p>${values.days[4].sunrise}</p></td>
                    <td><p>${values.days[5].sunrise}</p></td>
                    <td><p>${values.days[6].sunrise}</p></td>
                </tr>
                <tr>
                    <th class="mainColumn"><i class="bi bi-sunset-fill"></i></th>
                    <td><p>${values.days[0].sunset}<p></td>
                    <td><p>${values.days[1].sunset}</p></td>
                    <td><p>${values.days[2].sunset}</p></td>
                    <td><p>${values.days[3].sunset}</p></td>
                    <td><p>${values.days[4].sunset}</p></td>
                    <td><p>${values.days[5].sunset}</p></td>
                    <td><p>${values.days[6].sunset}</p></td>
                </tr>
                <tr>
                    <th></th>
                    <td><p><img src="./assets/icons/${values.days[0].icon}.png" alt="weather's icon"></p></td>
                    <td><p><img src="./assets/icons/${values.days[1].icon}.png" alt="weather's icon"></p></td>
                    <td><p><img src="./assets/icons/${values.days[2].icon}.png" alt="weather's icon"></p></td>
                    <td><p><img src="./assets/icons/${values.days[3].icon}.png" alt="weather's icon"></p></td>
                    <td><p><img src="./assets/icons/${values.days[4].icon}.png" alt="weather's icon"></p></td>
                    <td><p><img src="./assets/icons/${values.days[5].icon}.png" alt="weather's icon"></p></td>
                    <td><p><img src="./assets/icons/${values.days[6].icon}.png" alt="weather's icon"></p></td>
                </tr>
            </table>
            `
        })
}