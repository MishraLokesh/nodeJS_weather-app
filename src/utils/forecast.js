const request = require('request')

const forecast = (address, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=e9b3aa5c762de7790abf4977b4a74984&query=" + address

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, { 
                location: body.request.query, 
                forecastData: body.current.weather_descriptions[0] + '. \n It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + ' % chance of rain. Feels like ' + body.current.feelslike + ' degrees.  ✅' 
            })
        }
    })
}

module.exports = forecast

