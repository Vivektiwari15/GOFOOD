import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate()
    
  const [useSignup, setSignup] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();

    const {name,location,email,password } = useSignup;
    const response = await fetch("http://localhost:2000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,location,email,password}),
    });

    const json = await response.json();

    if(!json.success) return alert("Invalid creditionals")
    navigate("/")
  };

  const handleSingnup = (e) => {
    setSignup({ ...useSignup, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="bg-dark p-3 pt-5 text-light">
        <div className="container my-3 border p-4">
          <h2 className="border-bottom pb-2 text-center">Sign Up</h2>
          <form method="post" onSubmit={handlesubmit}>
            <div className="form-group my-2 py-3">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                value={useSignup.name}
                name="name"
                onChange={handleSingnup}
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group my-2 py-3">
              <label htmlFor="exampleInputEmail1">Location</label>
              <input
                type="name"
                className="form-control"
                id="location"
                value={useSignup.location}
                name="location"
                onChange={handleSingnup}
                aria-describedby="emailHelp"
                placeholder="Enter location"
              />
            </div>
            <div className="form-group my-2 py-3">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={useSignup.email}
                name="email"
                onChange={handleSingnup}
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
                value={useSignup.password}
                onChange={handleSingnup}
                id="Password"
                autoComplete='(suggested: "current-password")'
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
