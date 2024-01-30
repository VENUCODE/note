import React,{useState,useEffect} from 'react'
import Input from './input'

const Form = ({status}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
  
    // Load users from local storage on component mount
    useEffect(() => {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      setUsers(storedUsers);
    }, [status]);
  
    useEffect(() => {
      localStorage.setItem('users', JSON.stringify(users));
    }, [users]);
    
  
    const handleSignUp = async (e) => {
      e.preventDefault();
      if (!username.trim() || !password.trim()) return;
      const newUser = { username, password };
      setUsers([...users, newUser]);
      setUsername('');
      setPassword('');
    };
    const handleLogin=(e)=>{
    e.preventDefault();
    const matchedUser = users.find(user => user.username === username && user.password === password);
    if(matchedUser){
    status(prev=>!prev);
    }else{
        setUsername("");
        setPassword("");
    }
    }
  return (
    <div>
        <h1>Login page</h1>
      <form >
        <Input type="email" onchange={setUsername} value={username} placeholder="Your email"/>
        <Input type="password" onchange={setPassword} value={password} placeholder="Your password"/>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignUp}>SignUp</button>

      </form>
    </div>
  )
}

export default Form
