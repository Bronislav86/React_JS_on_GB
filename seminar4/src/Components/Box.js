import React from 'react';

function Box({children}) {
    return (
        <div style={{border: "1px solid lightgray", padding: "10px", maxWidth: "70vw", margin: "20px auto 0 auto"}}>
            {children}
        </div>
    );
}

export default Box;