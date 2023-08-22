import React from "react";
import { useState } from "react";
import { validation } from "./validation.js";
import style from "./From.module.css";

export default function Form({ login }) {
  const [userData, SetUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
    SetUserData({ ...userData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.loginForm}>
        <h2 className={style.loginF}>LOGIN</h2>

        <div className={style.logiConten}>
          <label htmlFor="email" className={style.formLabel}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={userData.email}
            name="email"
            onChange={handleChange}
            className={style.formInput}
          />
          {errors.email && (
            <p className={style.errorMessage}> {errors.email}</p>
          )}
        </div>

        <div className={style.logiConten}>
          <label htmlFor="password" className={style.formLabel}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={userData.password}
            name="password"
            onChange={handleChange}
            className={style.formInput}
          />
          {errors.password && (
            <p className={style.errorMessage}> {errors.password}</p>
          )}
        </div>

        <button className={style.submitButton}>INICIAR</button>
      </form>
    </div>
  );
}
