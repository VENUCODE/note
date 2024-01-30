import React from 'react'
import {useState} from 'react';
import Form from './form';
import Container from './container';

const Login = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false)

   
  
  return (
    <div>
     {isLoggedIn? <Form status={setIsLoggedIn} />:<Container status={setIsLoggedIn}/>}
    </div>
  )
}

export default Login
