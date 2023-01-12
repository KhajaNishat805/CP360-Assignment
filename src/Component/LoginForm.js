import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginForm() {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [mailError, setMailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const navigate = useNavigate()
    const handleMailChange = (e) => {
    setMail(e.target.value) 
    setMailError(false)     
    }
    const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setPasswordError(false)
    }
    const validateEmail = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };
    const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(mail) ? setMailError(false): setMailError(true);
    if(!password) {
      setPasswordError(true)
  }else{
        let val= password.split('')
            let result=val.map(Number).reduce((a,b)=>a+b)
        if(result === 10){
            navigate('/home')
        }else{
            setPasswordError(true);  
        }
    } 
    }

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Login In</div>
        <div  className="form">
        <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={mail}
          onChange={(e)=>handleMailChange(e)}
        />
        {mailError ? <div className="error">Email is Invalid</div>:null}
      </div>
      <div className="input-container">
        <label>Password</label>
        <input
          type="password"
          name="password"
          maxLength={4}
          minLength={4}
          value={password}
          onChange={(e)=>handlePasswordChange(e)}
        />
        {passwordError ? <div className="error">Password is Invalid</div>:null}
      </div>
      <div className="button-container">
      <input type="submit" />
      </div>
    </form>
    </div>
      </div>
    </div>
  );
}

export default LoginForm;