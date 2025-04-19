import { getWeatherDataClick, getWeatherMainCity } from "./functions.js"

document.addEventListener("DOMContentLoaded",  function() {

    try {
        getWeatherMainCity()
    } catch (error) {
        alert(`Error: ${error}`)
    }

    try  {
        getWeatherDataClick()
    } catch (error) {
        alert(`Error: ${error}`)
    }
})
