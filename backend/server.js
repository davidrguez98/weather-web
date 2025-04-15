const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()

const app = express()
app.use(cors())

const PORT = 3000

app.get("/weather", async (req, res) => {
    const city = req.query.city
    const apiKey = process.env.SECRET_KEY
    
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`)
        if (!response.ok) {
            throw Error(`Error: ${response.status}`)
        }
        
        const data = await response.json()
        res.json(data)
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
