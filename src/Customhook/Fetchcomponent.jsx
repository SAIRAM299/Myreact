import React from 'react';
import useFetchapi from './useFetchapi';
import Errormessage from './Errormessage';
export default function Fetchcomponent() {
const {data,err}=useFetchapi("https://jsonplaceholder.typicode.com/todos",[])

    return (
        <div>
        {err ?
        <div>
            <Errormessage/>
            </div>
            :
        <div>
            {data.map((dd,i)=>(
                <div key={i}>
                <h1>{dd.title}</h1>
                </div>
            ))}


        </div>


            }
            </div>
    );
}

 
