import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countact } from './Reduxcom/Slice/Counterslice';
export default function Countercomponent() {
    const [count,setcount]=useState(0)
    let dispatch=useDispatch()
const handleincre=()=>{
   dispatch(countact.increment())
}
const handledec=()=>{
    dispatch(countact.decrement())
}
let countnum=useSelector((Store)=>Store.counter.count)

    return (
        <div className='contain'>
            <h1>count={countnum}</h1>
             <button onClick={handleincre}>increment</button>
            <button onClick={handledec}>decrement</button> 
        </div>
    );
}

 
