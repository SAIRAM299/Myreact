import React, { useContext, useState } from 'react';
import Countercontext from '../context/Countercontext';

export default function Compprovider({children}) {
    const [count,setcount]=useState(0)
    const increment=()=>{
        setcount(count+1)
    }
    return (
        <div>
            <Countercontext.Provider value={{count,increment}}>
                {children}
            </Countercontext.Provider>
        </div>
    );
}

export const useCounter=()=>{
   return useContext(Countercontext)
}