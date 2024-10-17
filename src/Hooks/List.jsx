//usestate is a one problem that us infinite re-render that handle the use useEffect
import React, { useEffect, useState } from 'react'
import './List.css'
function List() {
  let [item,setItem]=useState([])
  useEffect(()=>{
    Fetchdata();
    },[])
  async function Fetchdata(){
    let info=await fetch("http://localhost:2000/Items");
    let data=await info.json();
    setItem(data)
  } 
  console.log(item);
  
   return(
      <div className='print'>
          {item.map((i)=>{
            return(
            <>
                <h1>{i.id}</h1>
                <h1>{i.Name}</h1>
                <h2>{i.Price}</h2>
                <img src={i.Image} alt="" />
                </>
            )
          })}
      </div>
   )
}
export default List;