const request = require('request')


const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoieGFiYSIsImEiOiJjazV0dDNiZmUwdGl6M2twbGR3MDJ5NXVsIn0.UrnyS3zg0dcG-rVDBrO9lg&limit=1"
    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Network Service', undefined)
        } else if(body.features.length === 0) {
            callback('No Location found. Try Another')
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
            })
        }
    })
}


module.exports = geocode;