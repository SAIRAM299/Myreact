import React from 'react';
import { useCounter } from './Compprovider';

export default function Countcomponent ()  {
const {increment}=useCounter()

    return (
        <div>
            <h1>watch</h1>
            <button onClick={increment}>ADD</button>
        </div>
    );
}


