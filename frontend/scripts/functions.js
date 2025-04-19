import { getWeatherData } from "./dataWeather.js"

export async function getWeatherMaincity() {

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
                <td>${values.days[0].conditions}</td>
                <td>${values.days[1].conditions}</td>
                <td>${values.days[2].conditions}</td>
                <td>${values.days[3].conditions}</td>
                <td>${values.days[4].conditions}</td>
                <td>${values.days[5].conditions}</td>
                <td>${values.days[6].conditions}</td>
            </tr>
            <tr>
                <th class="mainColumn">Max temperature</th>
                <td>${values.days[0].maxTemp}</td>
                <td>${values.days[1].maxTemp}</td>
                <td>${values.days[2].maxTemp}</td>
                <td>${values.days[3].maxTemp}</td>
                <td>${values.days[4].maxTemp}</td>
                <td>${values.days[5].maxTemp}</td>
                <td>${values.days[6].maxTemp}</td>
            </tr>
            <tr>
                <th class="mainColumn">Min temperature</th>
                <td>${values.days[0].minTemp}</td>
                <td>${values.days[1].minTemp}</td>
                <td>${values.days[2].minTemp}</td>
                <td>${values.days[3].minTemp}</td>
                <td>${values.days[4].minTemp}</td>
                <td>${values.days[5].minTemp}</td>
                <td>${values.days[6].minTemp}</td>
            </tr>
            <tr>
                <th class="mainColumn">Rain</th>
                <td>${values.days[0].precipitationProb}</td>
                <td>${values.days[1].precipitationProb}</td>
                <td>${values.days[2].precipitationProb}</td>
                <td>${values.days[3].precipitationProb}</td>
                <td>${values.days[4].precipitationProb}</td>
                <td>${values.days[5].precipitationProb}</td>
                <td>${values.days[6].precipitationProb}</td>
            </tr>
            <tr>
                <th class="mainColumn">Humidity</th>
                <td>${values.days[0].humidity}</td>
                <td>${values.days[1].humidity}</td>
                <td>${values.days[2].humidity}</td>
                <td>${values.days[3].humidity}</td>
                <td>${values.days[4].humidity}</td>
                <td>${values.days[5].humidity}</td>
                <td>${values.days[6].humidity}</td>
            </tr>
            <tr>
                <th class="mainColumn"><i class="bi bi-sunrise-fill"></i></th>
                <td>${values.days[0].sunrise}</td>
                <td>${values.days[1].sunrise}</td>
                <td>${values.days[2].sunrise}</td>
                <td>${values.days[3].sunrise}</td>
                <td>${values.days[4].sunrise}</td>
                <td>${values.days[5].sunrise}</td>
                <td>${values.days[6].sunrise}</td>
            </tr>
            <tr>
                <th class="mainColumn"><i class="bi bi-sunset-fill"></i></th>
                <td>${values.days[0].sunset}</td>
                <td>${values.days[1].sunset}</td>
                <td>${values.days[2].sunset}</td>
                <td>${values.days[3].sunset}</td>
                <td>${values.days[4].sunset}</td>
                <td>${values.days[5].sunset}</td>
                <td>${values.days[6].sunset}</td>
            </tr>
            <tr>
                <th></th>
                <td><img src="./assets/icons/${values.days[0].icon}.png" alt="weather's icon"></td>
                <td><img src="./assets/icons/${values.days[1].icon}.png" alt="weather's icon"></td>
                <td><img src="./assets/icons/${values.days[2].icon}.png" alt="weather's icon"></td>
                <td><img src="./assets/icons/${values.days[3].icon}.png" alt="weather's icon"></td>
                <td><img src="./assets/icons/${values.days[4].icon}.png" alt="weather's icon"></td>
                <td><img src="./assets/icons/${values.days[5].icon}.png" alt="weather's icon"></td>
                <td><img src="./assets/icons/${values.days[6].icon}.png" alt="weather's icon"></td>
            </tr>
        </table>
        `
}

export async function getWeatherDataClick() {

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
            <td>${values.days[0].conditions}</td>
            <td>${values.days[1].conditions}</td>
            <td>${values.days[2].conditions}</td>
            <td>${values.days[3].conditions}</td>
            <td>${values.days[4].conditions}</td>
            <td>${values.days[5].conditions}</td>
            <td>${values.days[6].conditions}</td>
        </tr>
        <tr>
            <th class="mainColumn">Max temperature</th>
            <td>${values.days[0].maxTemp}</td>
            <td>${values.days[1].maxTemp}</td>
            <td>${values.days[2].maxTemp}</td>
            <td>${values.days[3].maxTemp}</td>
            <td>${values.days[4].maxTemp}</td>
            <td>${values.days[5].maxTemp}</td>
            <td>${values.days[6].maxTemp}</td>
        </tr>
        <tr>
            <th class="mainColumn">Min temperature</th>
            <td>${values.days[0].minTemp}</td>
            <td>${values.days[1].minTemp}</td>
            <td>${values.days[2].minTemp}</td>
            <td>${values.days[3].minTemp}</td>
            <td>${values.days[4].minTemp}</td>
            <td>${values.days[5].minTemp}</td>
            <td>${values.days[6].minTemp}</td>
        </tr>
        <tr>
            <th class="mainColumn">Rain</th>
            <td>${values.days[0].precipitationProb}</td>
            <td>${values.days[1].precipitationProb}</td>
            <td>${values.days[2].precipitationProb}</td>
            <td>${values.days[3].precipitationProb}</td>
            <td>${values.days[4].precipitationProb}</td>
            <td>${values.days[5].precipitationProb}</td>
            <td>${values.days[6].precipitationProb}</td>
        </tr>
        <tr>
            <th class="mainColumn">Humidity</th>
            <td>${values.days[0].humidity}</td>
            <td>${values.days[1].humidity}</td>
            <td>${values.days[2].humidity}</td>
            <td>${values.days[3].humidity}</td>
            <td>${values.days[4].humidity}</td>
            <td>${values.days[5].humidity}</td>
            <td>${values.days[6].humidity}</td>
        </tr>
        <tr>
            <th class="mainColumn"><i class="bi bi-sunrise-fill"></i></th>
            <td>${values.days[0].sunrise}</td>
            <td>${values.days[1].sunrise}</td>
            <td>${values.days[2].sunrise}</td>
            <td>${values.days[3].sunrise}</td>
            <td>${values.days[4].sunrise}</td>
            <td>${values.days[5].sunrise}</td>
            <td>${values.days[6].sunrise}</td>
        </tr>
        <tr>
            <th class="mainColumn"><i class="bi bi-sunset-fill"></i></th>
            <td>${values.days[0].sunset}</td>
            <td>${values.days[1].sunset}</td>
            <td>${values.days[2].sunset}</td>
            <td>${values.days[3].sunset}</td>
            <td>${values.days[4].sunset}</td>
            <td>${values.days[5].sunset}</td>
            <td>${values.days[6].sunset}</td>
        </tr>
        <tr>
            <th></th>
            <td><img src="./assets/icons/${values.days[0].icon}.png" alt="weather's icon"></td>
            <td><img src="./assets/icons/${values.days[1].icon}.png" alt="weather's icon"></td>
            <td><img src="./assets/icons/${values.days[2].icon}.png" alt="weather's icon"></td>
            <td><img src="./assets/icons/${values.days[3].icon}.png" alt="weather's icon"></td>
            <td><img src="./assets/icons/${values.days[4].icon}.png" alt="weather's icon"></td>
            <td><img src="./assets/icons/${values.days[5].icon}.png" alt="weather's icon"></td>
            <td><img src="./assets/icons/${values.days[6].icon}.png" alt="weather's icon"></td>
        </tr>
    </table>
    `
}