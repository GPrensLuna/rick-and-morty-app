import React from 'react'
import { useState } from 'react';
import { validation } from './validation';
import style from './From.module.css'

export default function Form({login}) {

const [userData, SetUserData] = useState({
    email:'',
    password:'',
});

const [errors, setErrors] = useState({});

function handleChange(event){
    setErrors(validation({...userData, [event.target.name]:event.target.value}))
    SetUserData({...userData, [event.target.name]: event.target.value})
}

function handleSubmit(event){
    event.preventDefault();
       login(userData); 
}


    return (
        <div className={style.container}>
            <form className={style.from} onSubmit={handleSubmit}>
                <label htmlFor   = "email">Email:
                    <input 
                        type     = "text" 
                        id       = 'email'
                        value    = {userData.email}
                        name     = 'email'
                        onChange = {handleChange}
                        className= {errors.email && style.warning }
                    />
                </label>

                {errors.email && (<p className={style.valiError}> {errors.email}</p>)}
            
                <label htmlFor   = "password">Password:
                    <input 
                        type     = "password" 
                        id       = 'password'
                        value    = {userData.password}
                        name     = 'password'
                        onChange = {handleChange}
                        className= {errors.password && style.warning }

                    />
                </label>
                {errors.password && (<p className={style.valiError}> {errors.password}</p>)}

                <button>Smbmit</button>
            </form>
        </div>
    )
};


