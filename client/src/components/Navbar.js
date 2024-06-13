import React from 'react'
import { Link , useLocation, useNavigate } from 'react-router-dom'


export default function Navbar() {

  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout= ()=>{
    localStorage.removeItem("authToken")
    navigate("/login")
  }


  return (
    <>
        <nav className="navbar navbar-expand-lg bg-success border-bottom border-bottom-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand fst-italic fs-3 mx-2" >GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
        <li className="nav-item">
          <Link to='/' className={`nav-link ${location.pathname==="/" && "active"} mx-3`}  aria-current="page" >Home</Link>
        </li>
        {localStorage.getItem("authToken")?
        <li className="nav-item">
        <Link to='/' className={`nav-link ${location.pathname==="/login" && "active"}`} >My orders</Link>
      </li>
      :""}
      </ul>
      <div className="d-flex" >
        {localStorage.getItem("authToken")?
        <div>
        <Link to='/signup' className='pt-3'><i className={`fa-solid fa-cart-shopping fa-2xl mx-3`} style={{color: "yellow",}}></i></Link>
        <button className="btn btn-danger mb-1 mx-1" type="submit" onClick={handleLogout} >Logout</button>  
        </div>
      :<div>
        <Link to='/signup' className="btn btn-primary mx-1 " >Sign up</Link>
        <Link to='/login' className="btn btn-danger mx-1" >Login</Link>
      </div>}
    </div>
    </div>
  </div>
</nav>
    </>
  )
}
