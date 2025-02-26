import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Link';
import {Link} from "react-router-dom";

const preventDefault = (event) => event.preventDefault();

const AboutPage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
            <h1>About Page</h1>
            <div style={{border: "1px solid black", maxWidth: "400px", padding: "10px"}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut consectetur consequuntur debitis
                    deleniti ipsa libero magnam, magni maiores, minima nam natus neque numquam obcaecati officiis
                    praesentium voluptate voluptates. Aspernatur consectetur consequuntur, deserunt dolor est illum in
                    ipsam laboriosam minus necessitatibus neque, nesciunt obcaecati, ratione rerum veniam vero
                    voluptatem voluptatibus!</p>
            </div>
            <nav style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        typography: 'body1',
                        cursor: 'pointer',
                        '& > :not(style) ~ :not(style)': {
                            ml: 2,
                        },
                    }}
                    onClick={preventDefault}
                >
                    <Button component={Link} to="/" underline="hover">Главная</Button>
                    <Button component={Link} to="/about" underline="hover">О нас</Button>
                </Box>
            </nav>
        </div>
    );
};

export default AboutPage;
