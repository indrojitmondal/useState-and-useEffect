import { useState } from "react"
import './Counter.css';
export default function Counter(){
    const [count, setCount]= useState(0);
    function add(){
        setCount(count+1);
    }
    function remove(){
        setCount(count-1);
    }

    return (
        <div className="counter">
        <h3>Counter:{count}</h3>
        <button onClick={add}>Add</button>
        <button onClick={remove} >Remove</button>
        </div>
        
        
    )
}