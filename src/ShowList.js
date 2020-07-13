import React ,{ useContext , useEffect } from 'react'
import contextCreate from "./listContext";
import "./App.css";



export default function ShowList() {
    let dataShow = useContext(contextCreate);

    const deleteFtn = (value) =>{
        dataShow[1](dataShow[0].filter((element)=>element.name!=value))
       
    }
    

    return (
        <div>
            {dataShow[0].map((show)=><div className="details"><p>{show.name} {show.value}</p><button className="buttonDel" onClick={()=>deleteFtn(show.name)}>X</button></div>)}
           
            
        </div>
    )
}
