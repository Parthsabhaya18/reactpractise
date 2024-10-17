// usetstate is a hooks that is used to create a dynamic variable 
import { useState } from "react";

const Cashcounter=()=>{
    let [num,setnum]=useState(0);    
    // [dynamic varible,and setnum is a function is re-render means re display upadated value]
    function Increase(){
        setnum(num=num+1)
        console.log(num);
    }
    function Decrease(){
        setnum(num=num-1)
        console.log(num);
    }
    return(
        <div className="countt">
        <h1>Total Count:{num}</h1>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
        </div>
    )
    
}
export default Cashcounter