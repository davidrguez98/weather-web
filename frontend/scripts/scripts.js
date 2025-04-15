const city = "Sevilla"

fetch(`http://localhost:3000/weather?city=${city}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch (error => {
        console.log(error)
    })