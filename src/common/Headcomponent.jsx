import React from 'react';
import { useCounter } from './Compprovider';

export default function Headcomponent() {
    const {count}= useCounter()



    return (
        <div>
            <h1>count : {count}</h1>
            <h1>count : {count}</h1>
            <h1>count : {count}</h1>
        </div>
    );
}


