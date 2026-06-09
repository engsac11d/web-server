// const request = require('request')

// const url = 'https://api.weatherstack.com/current?access_key=32005c6266fe46a2d71b30ea47c3eb25&query=2.0469,45.3182'



// request({url: url , json: true},(error, response) => {
//     // console.log(response.body.current)
//    console.log(response.body.current.weather_descriptions + `. Its is currently ${response.body.current.temperature} degress out . It feels like ${response.body.current.feelslike} degrees out  `)
// })


// Geocoding 
//Address -> lat/long -> weather 

//
//Goal: print the lat/long for Los Angeles
//
//1.fire off a new request to the url exploared in browser
//2.have the request module parse it as JSON
//3.print both the latitude and the longitude to the terminal
//4.Test your work 

const request = require('request')

const url = 'https://geocode.maps.co/search?q=xyzfakelocation123&api_key=6a28736d68f09737440014syh070a58'

request({url:url , json:true},(error, response) =>{
    if (error){
        console.log('unable to connect!')

    }else {
        console.log(`the latitude is ${response.body[0].lat}`)
        console.log(`the longtude is ${response.body[0].lon}`)
             

    }

})