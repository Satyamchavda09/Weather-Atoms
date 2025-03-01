import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox ({updateInfo}) {
        let [city, setCity] = useState("");
        let [error, setError] = useState(false);
        const API_URL = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY = "902e648089b9f4f88031ce2b0fcf2cc5"

        let getWeatherInfo = async () => {
            try{
                let response = await fetch(` ${ API_URL }?q=${city}&appid=${API_KEY}&units=metric `);
                let jsoneResponse = await response.json();
                let result = {
                    city: city,
                    temp: jsoneResponse.main.temp,
                    tempMin: jsoneResponse.main.temp_min,
                    tempMix: jsoneResponse.main.temp_max,
                    humidity: jsoneResponse.main.humidity,
                    feelsLike: jsoneResponse.main.feels_like,
                    weather: jsoneResponse.weather[0].description
                };
                console.log(result);
                return result;
            }catch(err) {
                throw err;
            }
        };

        

        let handleChange = (event) => {
            setCity(event.target.value);
        };
        let handleSubmit = async (event) => {
            try{
                event.preventDefault();
                console.log(city);
                setCity("");
                let newInfo = await getWeatherInfo();
                updateInfo(newInfo);
            }catch(err){
                setError(true);
            }
        };
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required value={city} 
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color: 'red'}}>No such place exists!</p>}
            </form>
        </div>
    );
}