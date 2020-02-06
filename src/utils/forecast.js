const request = require('request')




const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2ad47c237adeb3eec9ea8474c081ba5b/' + encodeURIComponent(longitude)  + ',' +encodeURIComponent(latitude)+ '?units=si'

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Network connection failure', undefined)
        } else if( body.error) {
            callback('Wrong coordinates', undefined)
        } else {
            callback(undefined, {
                summary: body.hourly.data[0].summary,
                temperature: body.currently.temperature,
                precipProbability: body.currently.precipProbability,
            })
        }
    })


}


module.exports = forecast


