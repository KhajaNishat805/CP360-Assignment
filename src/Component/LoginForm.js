import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginForm() {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [mailError, setMailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    console.log("feilds value ===>",mail,password);
    const navigate = useNavigate()
    const handleMailChange = (e) => {
    setMail(e.target.value) 
    setMailError(false)     
    }
    const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setPasswordError(false)
    }
    
    const handleSubmit = (e) => {
    e.preventDefault();
    if (!mail) {
        setMailError(true);
    }
    if(password){
        let val= password.split('')
            let result=val.map(Number).reduce((a,b)=>a+b)
        console.log("addition==>",result);
        if(result === 10){
            console.log('Form submitted successfully');
            navigate('/home')
        }else{
            setPasswordError('Password addition must be equal to 10');  
        }
    }else if(!password) {
        setPasswordError(true)
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
          type="email"
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