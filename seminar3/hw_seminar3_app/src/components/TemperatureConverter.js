import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";


export default function TemperatureConverter() {

    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const convertCelsiusToFahrenheit = (celsius) => (celsius * 9/5 + 32);
    const convertFahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5/9);

    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        setFahrenheit(convertCelsiusToFahrenheit(value));
    }

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        setCelsius(convertFahrenheitToCelsius(value));
    }

    function clearAll() {
    setCelsius('');
    setFahrenheit('');
}

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Celsius (°C)" variant="outlined" value={celsius} onChange={handleCelsiusChange} />
            <TextField id="outlined-basic" label="Fahrenheit(°F)" variant="outlined" value={fahrenheit} onChange={handleFahrenheitChange} />
            <Button variant="contained" disableElevation onClick={clearAll}>
                Очистить форму
            </Button>
        </Box>
    );

}