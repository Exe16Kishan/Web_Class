import React from 'react'
import { useState } from 'react'

function App() {
  const[naam,changeKaroNaam] = useState({
    name:"kishan",
    class :"4th year"
  })
  const raushan = {
    name:"raushan",
    class:"3rd year"
  }

  console.log("initial value "+naam.name + " " + naam.class)
  return (
    <div>
      <h1>{naam.name}</h1>
      <h1>{naam.class}</h1>
    <button onClick={()=>changeKaroNaam(raushan)}>raushan</button>
    {/* <button onClick={()=>changeKaroNaam("Subodh")}>subodh</button>
    <button onClick={()=>setname("prince")}>prince</button>
    <button onClick={()=>setname("Cutie")}>cutie</button> */}
    </div>
  )
}

export default App