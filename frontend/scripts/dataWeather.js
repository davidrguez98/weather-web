export async function getWeatherData(city) {

    const url = `http://localhost:3000/weather?city=${city}`

    try {
        const response = await fetch(url)
        const data = await response.json()

        const weatherDisplay = {
            location: data.resolvedAddress,
            days: []
        }

        for (let i of data.days.slice(0, 7)) {
            const day = {
                date: new Date(i.datetime).toLocaleDateString(),
                conditions: i.conditions,
                maxTemp: ((i.tempmax - 32) * 5 / 9).toFixed(1)+"º",
                minTemp: ((i.tempmin - 32) * 5 / 9).toFixed(1)+"º",
                precipitationProb: i.precipprob+"%",
                humidity: i.humidity+"%",
                sunrise: i.sunrise,
                sunset: i.sunset,
                icon: i.icon
            }
            weatherDisplay.days.push(day)
        }
        return weatherDisplay
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

