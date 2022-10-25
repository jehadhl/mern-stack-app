import React, { useContext, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const {user , dispatch, isFetching } = useContext(Context);
  const url = "http://localhost:4000/api/auth/login";

  const handleSubmit = async (e) => {
    e.preventDefault(); //refresh information
    dispatch({ type: "LOGIN_START" });
    setError(false);
    try {
      const res = await axios.post(url, { username, password });
      console.log(res);
      dispatch({type:"LOGIN_SUCCESS" , payload : res.data})
    } catch (err) {
      setError(true);
      console.log(err);
      dispatch({dispatch:"LOGIN_FAILED"})
    }
  };
   console.log(user)
   console.log(isFetching)
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      {error && <span>Login FAILED</span>}
      <Link to={"/register"} className="link">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
};

export default Login;
