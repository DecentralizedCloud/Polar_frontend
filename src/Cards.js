import React,{useState} from 'react'
import CardData from './CardData'
const Cards = () => {
    const [count, setState] = useState("0");
  return (
    <div>
      <CardData val ={count}/><br></br>
      <center>
      <div>
          <span><button type="button" class="btn btn-outline-dark" onClick={() => setState("0")}>{"<"}</button></span>
          <span><button type="button" class="btn btn-outline-dark" onClick={() => setState("1")}>{">"}</button></span>
      
      </div></center>
    </div>
  )
}

export default Cards
