import React from "react"
import { Link, NavLink } from "react-router-dom"
import avatar from "/assets/images/avatar-icon.png"
import logOut from "/assets/images/logout.png"
export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">RoamWheels</Link>
            <nav>
                <NavLink 
                    to="host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src={avatar}
                        className="login-icon"
                    />
                </Link>
                <button className="logout" onClick={fakeLogOut}> 
                <img className="logout" src={logOut} alt="logout" /> 
                </button>
            </nav>
        </header>
    )
}
