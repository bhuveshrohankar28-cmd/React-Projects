import React,{useState} from "react";

export default function App(){
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [errors,setErrors] = useState({});
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    let currentErrors = {};
    if(!username.trim()){
      currentErrors.username = "Username is required";                   
    }
    if(!email.includes('@')){
      currentErrors.email = "A valid email is required";
    }
    if(password.length<6){
      currentErrors.password = "Password must be at least 6 characters";
    }
    if(Object.keys(currentErrors).length ===0){
      setIsLoggedIn(true);
    }else {
      setErrors(currentErrors);
    }
  };
    if(isLoggedIn){
      return(
        <div style={{textAlign:'center',marginTop:'50px'}}>
          <h1>Welcome to Home,{username}!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
        </div>
      );
    }
    return(
      <div style={{maxWidth:'300px',margin:'50px auto'}}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>

        <div style={{marginBottom:'10px'}}>
          <label>Username: </label>
          <input type="text"
                 value={username}
                 onChange={(e)=>setUsername(e.target.value)} 
          />
          {errors.username && (
            <p style={{color:'red',margin:0}}>
              {errors.username}
            </p>
          )}
        </div>

        <div style={{marginBottom:"10px"}}>
          <label>Email:</label>
          <input type="text" 
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
          />
          {errors.email && (
            <p style={{color:'red',margin:0}}>
              {errors.email}
            </p>
          )}
        </div>

        <div style={{marginBottom:'10px'}}>
          <label>Password: </label>
          <input type="password"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)} 
          />
          {errors.password && (
            <p style={{color:'red',margin:0}}>
              {errors.password}
            </p>
          )}       
        </div>

        <button type="submit">Login</button>


      </form>
      </div>
    )
    
  }
