import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import {useState} from "react";

export default function TextDisplayForm() {

    const [inputedText, setInputedText] = useState('');
    const [submittedText, setSubmittedText] = useState('');

    const handleDisplayText =(e) => {
        e.preventDefault();
        setSubmittedText(inputedText);
        setInputedText('');
    }

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    КАРТОЧКА С ВВЕДЕННЫМ ТЕКСТОМ
                </Typography>
                <Typography variant="h5" component="div">
                    {submittedText ? submittedText : 'Здесь пока пусто'}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Text card</Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    );

    return (
        <div>
            <Box
                className="textDisplayForm"
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: "fullWidth" } }}
                noValidate
                autoComplete="off"
                onSubmit={handleDisplayText}
            >
                    <TextField
                        name="textDisplayForm"
                        id="outlined-textarea"
                        label="Введите текст"
                        placeholder=""
                        multiline
                        value={inputedText}
                        onChange={(e) => setInputedText(e.target.value)}
                    />
                    <Button type="submit">Отобразить текст</Button>
                {submittedText && <p>Введенный текст: {submittedText}</p>}
            </Box>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
        </div>
    );
}