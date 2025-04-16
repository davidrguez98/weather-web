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
                date: i.datetime,
                conditions: i.conditions,
                maxTemp: i.tempmax,
                minTemp: i.tempmin,
                precipitationProb: i.precipprob,
                humidity: i.humidity,
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