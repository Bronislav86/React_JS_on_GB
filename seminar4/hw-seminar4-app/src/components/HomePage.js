import React from 'react';
import pic from "../assets/CmBkCF.png";
import Box from '@mui/material/Box';
import Button from '@mui/material/Link';
import {Link} from "react-router-dom";

const preventDefault = (event) => event.preventDefault();

const HomePage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
            <h1>Главная страница</h1>
            <img src={pic} alt="main picture" style={{width: '50%', height: '50%'}}/>
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
                    <Button component={Link} to="/about" underline="hover">{`О нас`}</Button>
                </Box>
            </nav>
        </div>
    );
};

export default HomePage;
