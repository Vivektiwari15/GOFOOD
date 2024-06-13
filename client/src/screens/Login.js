import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Login() {

   const navigate = useNavigate()
    
  const [useLogin, setLogin] = useState({ email: "", password: "" });

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { email, password } = useLogin;
    const response = await fetch("http://localhost:2000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    if(!json.success) return alert("Invalid email or password")
   localStorage.setItem("authToken",json.authToken) 
    navigate("/")
  };

  const handlelogin = (e) => {
    setLogin({ ...useLogin, [e.target.name]: e.target.value });
  };

  return (  
    <>
      <Navbar />
      <div className="bg-dark p-3 pt-5 text-light">
        <br /><br /><br />
        <div className="container my-3 border p-4">
          <h2 className="border-bottom pb-2 text-center">Login</h2>
          <form method="post" onSubmit={handlesubmit}>
            <div className="form-group my-2 py-3">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={useLogin.email}
                name="email"
                onChange={handlelogin}
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group my-3 py-3">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={useLogin.password}
                onChange={handlelogin}
                id="exampleInputPassword1"
                autoComplete='(suggested: "current-password")'
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
        <br /><br />
      </div>
      <Footer />
    </>
  );
}
