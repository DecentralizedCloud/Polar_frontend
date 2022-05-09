import React,{useState} from 'react'
import CardData from './CardData'
import './App.css'
import Nav from './Nav';
const Cards = () => {
    const [count, setState] = useState("0");
  return (
    <div className='backimage'>
      {/* <div> */}
      <Nav/>
      <div style={{
        height: "100%",
        justifyContent:"center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
      }}>
      <CardData val ={count}/><br></br>
      <center>
      <div>
          <span><button type="button" class="btn btn-outline-dark" onClick={() => setState("0")}>{"<"}</button></span>
          <span><button type="button" class="btn btn-outline-dark" onClick={() => setState("1")}>{">"}</button></span>
      
      </div></center>
      </div>
      </div>
    // </div>
  )
}

export default Cards
