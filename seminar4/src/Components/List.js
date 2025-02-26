import React from 'react';

function List({ items }) {
    return (
        <div>
            <h2>Наш список элементов</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index} style={{listStyle: "none"}}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default List;