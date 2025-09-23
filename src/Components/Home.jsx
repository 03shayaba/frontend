import React from 'react'
import { useState } from 'react'
import '../css/home.css'
const Home = () => {
    const [count, setCount] = useState(0)

    // function Increment(){
    //  return   setCount(count+1);
    // }

    //  function  Decrement(){
    //  return   setCount(count-1);
    // }
    
  return (
    <div className='count'>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count+1)} >Increment</button>
        <button onClick={() => setCount(count-1)}> Decrement</button>
        <button onClick={()=> setCount(0)}>Reset</button>

        {/* <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button> */}
    </div>
  )
}

export default Home