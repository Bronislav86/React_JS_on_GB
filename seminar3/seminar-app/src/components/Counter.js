import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClickUp() {
        setCount(count + 1);
    }

    function handleClickDown() {
        setCount(count - 1);
    }
    return (
        <div className="counter-container">
            <span className="counter-number">{ count }</span>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
            >
                <Button onClick={() => {handleClickUp()}}>Count++</Button>
                <Button onClick={() => {handleClickDown()}}>Count--</Button>
            </ButtonGroup>
        </div>
    );
}