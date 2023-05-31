import React, { useState } from "react";
import { validation } from "./validation";
import styles from "./Form.module.css"

function Form() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
    function handleChange(event) {
        setErrors(validation({...userData,[event.target.name]: event.target.value}))
        setUserData({
            ...userData, [event.target.name]:event.target.value
        })
    }
    const [errors, setErrors] = useState();
  return ( 
    <div>
      <form className={styles.conteiner} action="">
        
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={userData.email} onChange={handleChange} name="email" />
        
        <label htmlFor="password">Password</label>
        <input type="text" id="password" value={userData.password} onChange={handleChange} name="password" />
        
        <button>LOGIN</button>
      </form>
    </div>
  );
}

export default Form;
