
import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

export default function Todolist(){
let uuid=uuidv4()

const [input,setinput]=useState("")   


const handleinput=(e)=>{
    setinput(e.target.value)
}


const handleadd=()=>{
    settodolist([...todolist,{id:uuid,task:input}])
    setinput("")
}




const [todolist,settodolist]= useState([
    {
        id: 1,
        task: "brush",
      },
      {
        id: 2,
        task: "eat"
      },
      {
        id: 3,
        task: "wrk"
      },
      {
        id: 4,
        task: "sleep"
      }
])


const handledel=(did)=>{
    const delto = todolist.filter(todo=>todo.id!==did)
    settodolist(delto)

}

const handleupd=(i)=>{
    let update =prompt("please enter task",todolist[i].task)
    const copyto= [...todolist]
    copyto[i].task=update
    settodolist(copyto)
}



    return (
        <div>
            <input placeholder='enter todo' value={input} onChange={handleinput} />
            <button onClick={handleadd}>add</button>





        {todolist.map((todo,index)=>(
          <div key={index}>




          <h1>{todo.task}</h1>
          <button onClick={()=>handledel(todo.id)}>x</button>
          <button onClick={()=>handleupd(index)}>update</button>





          </div>  
        ))}
            
        </div>
    );
}


