import React, { useState , useContext , useEffect } from 'react'
import contextCreate from "./listContext";


export default function ShowHistory() {
    let dataShow = useContext(contextCreate);
    let [history,setHistory] = useState(0);

    const totalHistory = () => {
        let sum = 0;
        dataShow[0].forEach((element)=>{
            sum += Number(element.value);
        })
        
        setHistory(sum)
        console.log(history);
    }
    useEffect(()=>{totalHistory()},[totalHistory])
   
    return (
        <div>
            
    <h1>Total Bill: {history}</h1>
            
        </div>
    )
}
