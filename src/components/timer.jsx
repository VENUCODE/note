import React,{useState,useEffect} from 'react'

const Timer = () => {
    const [time,setTime]=useState("");
    useEffect(() => {
        const intervalId = setInterval(() => {
          const now = new Date().toLocaleTimeString();
          setTime(now);
        }, 1000);
            return () => clearInterval(intervalId);
      }, []); 
  return (
    <div className='note'>
      {time}
    </div>
  )
}

export default Timer
