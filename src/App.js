import React, { useState } from 'react';
import './App.css';
import ShowList from "./ShowList"; 
import contextCreate from "./listContext"
import ShowHistory from "./ShowHistory";

function App() {
 
  let data = useState([]);
  // const [data,setData] = useState([{name: "",value: ""}]);
  const [value,setValue] = useState();
  const [name, setName] = useState();


  const changeValues = () => {
      let temp_data = data[0];
      temp_data.push({name: name,value: value});
      data[1](temp_data);
      setValue("");
      setName("");
  }
 
    return ( 
      <contextCreate.Provider value={data}>
      
      <div className = "App">
      <h1>Expense Tracker</h1>
        
        
          <ShowList />
        
     
         {/* {data[0].map((datas)=><p>{datas.name} {datas.value}</p>)} */}
    
      
        {/* <h1> Total Shows: {history}</h1> */}
        <ShowHistory />
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="enter name"/>
        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="enter amount"/>
        <button onClick={changeValues} className="buttonn">Add transaction</button>
      </div>
      </contextCreate.Provider>
      
    );
}

export default App;