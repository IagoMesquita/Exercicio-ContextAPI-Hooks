import React, { useContext } from 'react'
import AppContext from '../context/AppContext';

function RandomNumber() {
    const { number, text } = useContext(AppContext);
    return (
        <div>
        <h1>{ number }</h1>
        <h2>{ text }</h2>
        </div>
    )
}

export default RandomNumber;