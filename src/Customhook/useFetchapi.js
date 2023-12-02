import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function useFetchapi(url,initial){

const [data,setdata]=useState(initial)
const [err,seterr]=useState(false)


const fetchap=async()=>{

    try{

    let res=await axios.get(url)
    setdata(res.data)
    seterr(false)
    }
    catch(e){
        seterr(true)
    }
}

useEffect(()=>{
    fetchap()
})

    return {data,err}
    
}

 
