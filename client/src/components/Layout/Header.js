import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { BiCycling, BiPhoneCall, BiSupport } from "react-icons/bi";
import {useAuth} from "../../context/auth"
import toast from "react-hot-toast";
const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
      <Link to='/' className="navbar-brand" ><BiCycling />  shoping Junaid</Link>
        
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className="nav-link" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/contact' className="nav-link " aria-current="page" href="#">contact</NavLink>
        </li>
        {!auth.user ? (
          <>
          <li className="nav-item">
          <NavLink to='/register' className="nav-link" href="#">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/login' className="nav-link" href="#">Login</NavLink>
        </li>
          </>
        ):(
          <>
          <li className="nav-item">
          <NavLink onClick={handleLogout} to='/' className="nav-link" href="#">Logout</NavLink>
        </li>
          </>
        )}
     
        <li className="nav-item">
          <NavLink to='/cart' className="nav-link" href="#">Cart (0)</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <NavLink to='/policy' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to='/' className="dropdown-item" href="#">Action</NavLink></li>
            <li><NavLink to='/' className="dropdown-item" href="#">Another action</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink to='/' className="dropdown-item" href="#">Something else here</NavLink></li>
          </ul>
        </li> */}
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>



    </>
  )
}

export default Header