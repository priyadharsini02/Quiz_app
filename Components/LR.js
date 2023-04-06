import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import './LR.css'

function Lr() {
    const [currentForm, setCurrentForm] = useState('login');
  
    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }
  
    return (
      <div className="App">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
      </div>
    );
  }
  
  export default Lr;