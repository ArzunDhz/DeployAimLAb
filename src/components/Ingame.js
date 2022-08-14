
import { useState } from "react"

var a = 1 ;
const InGame= () => {

    const [postion , setPosition] = useState({
      
      x:750,
      y:500
    })
  
  var [count, setCount] = useState(0)
 let [counter,setCounter] = useState(30)
  
  const startCounter =()=>{
    setCounter(--counter)
  }
  const ok = ()=>{
    setInterval(()=>{ 
     if(counter>0)
      startCounter() ;
      else
      clearInterval(setCounter(), a = 0);
    },1000);
  }
  

    ok();

  
 if(a===0){
  return(
  <>
  <div className="game flex justify-center">
  <div className=" text-white  text-7xl mt-72" > Your score is { count } 

  
  <img   onClick={()=>{  window.location.reload() }}  className=" ml-44 mt-20 " src="loop.gif" alt='fdaf'/>          
   </div>


     </div>

  </>
  )
  }


  return (


      <>
<div className=" bg-red-200 game "  > 
      <h1   className=' text-center text-5xl  text-violet-50  select-none'> Aim's   LAb</h1>
      <h2 className=' text-center text-red-500 text-9xl select-none'> {count}   <span className=' text-yellow-100  ml-96'>{counter}  </span></h2>
  
  
      <div  style={{left:postion.x , top:postion.y  }}  onClick={()=>{setPosition({
        x:Math.floor(Math.random() * 1000 + 100),
        y:Math.floor(Math.random() * 350 + 300)
        
      });setCount(count+100); 
      }}   className=' px-5 py-4  rounded-full bg-orange-200 h-20 w-20 absolute   text-center select-none'>
      
      </div>

      </div>
      </>
      
    )
  }
  
  export default InGame