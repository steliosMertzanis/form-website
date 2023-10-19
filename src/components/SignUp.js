import React, { useState } from "react";
import useForm from "./useForm";
import validation from "./validation";

const SignUp = ({ submitForm }) => {
  const { values, handleChange, handleSubmit, errors } = useForm(
    validation,
    submitForm
  );

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h3>
        Get started with us today! Create your account by filling out the
        information below.
      </h3>

      <div className="form-inputs">
        <label htmlFor="username" className="input-label">
          Username
        </label>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Enter your username"
          id="username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>

      <div className="form-inputs">
        <label htmlFor="email" className="input-label">
          Email
        </label>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Enter your email"
          id="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="form-inputs">
        <label htmlFor="password" className="input-label">
          Password
        </label>
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Enter your password"
          id="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div className="form-inputs">
        <label htmlFor="password2" className="input-label">
          Confirm Password
        </label>
        <input
          className="form-input"
          type="password"
          name="password2"
          placeholder="Confirm your password"
          id="password2"
          value={values.password2}
          onChange={handleChange}
        />
        {errors.password2 && <p>{errors.password2}</p>}
      </div>
      <button className="btn-submit" type="submit">
        Sign Up
      </button>
      <div className="form-login">
        Already have an account? Login <a href="#">here</a>
      </div>
    </form>
  );
};

export default SignUp;
