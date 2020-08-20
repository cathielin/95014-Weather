import axios from 'axios'; // used for api requests 
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;
const ZIP_KEY = process.env.REACT_APP_ZIP_KEY;

const url = `https://api.openweathermap.org/data/2.5/forecast`;
const todayURL = `https://api.openweathermap.org/data/2.5/weather`;
const zipURL = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/`;

export const fetchZipCode = async(zip) => { 
    try { 
        // Fetch data from zip code API
        const {data} = await axios.get(`${zipURL}/${zip}?key=${ZIP_KEY}`);
        console.log(data);
        if(!data.Error) {
            console.log(data.City);
            return data.City;
        }
        return "Error";
        
    } catch(error) { 
        console.log(error);
    }
    
}


export const fetchToday = async(zip_code) => { 
    // Fetch weather data for today
    // Get date, main forecast, description
    try { 
        const { data : { dt, name , main, weather } } = await axios.get(`${todayURL}?zip=${zip_code}&appid=${API_KEY}`);
        var today = [];
        today.push(new Date(dt*1000));
        today.push(((main.feels_like * 9/5)-459.67).toFixed(1));
        today.push(weather[0].main);
        today.push((weather[0].description));
        today.push((weather[0].icon));

        return [today];

    } catch(error) { 
        console.log(error);
    }
}

export const fetchData = async(zip_code) => { 
    // Fetch data for 5 day forecast
    // Get data for date, temperature, weather description
    try {
        const { data: {city: {name}, list} } = await axios.get(`${url}?zip=${zip_code}&appid=${API_KEY}`);
        var i;
        var days = [];
        console.log(list);
        for(i = 0; i < list.length; i+=8) { 
            var temp = [];
            temp.push(new Date(list[i+5].dt_txt));
            const maxTemp = findMax(list, i);
            temp.push(maxTemp);
            temp.push(list[i].weather[0].main);
            temp.push(list[i+3].weather[0].description);
            temp.push(list[i].weather[0].icon);
            days.push(temp);
        }
        
        const selectedData = { 
            cityname : name,
            futuredays : days
        }
        return selectedData;
        
    } catch(error) { 
        console.log(error);
    }
}

// Finds max temperature in the day
const findMax = (weatherList, start) => { 
    var i; 
    var max = 0;
    for(i = start; i < start+8; i++) { 
        max = Math.max(max, weatherList[i].main.feels_like);
    }
    max = ((max * 9/5) - 459.67).toFixed(1);
    return max;
}

// Finds min temperature in the day
const findMin = (weatherList, start) => { 
    var i; 
    var min = 0;
    for(i = start; i < start+8; i++) { 
        min = Math.min(min, weatherList[i].main.feels_like);
    }
    min = ((min * 9/5) - 459.67).toFixed(1);
    return min;
}