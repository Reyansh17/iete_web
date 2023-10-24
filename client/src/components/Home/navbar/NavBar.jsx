import React from 'react'
import './NavBar.css'

export default function NavBar() {
 return (
    <div className="navbar">
      <div style={{ display: 'flex', margin: '0 2vw' }}>
        <img src='/src/assets/logo_home.png' height={"70px"} style={{ borderRadius: "30px" }} />
        <h3 style={{ marginLeft: "1vw", marginTop: "1.5rem" }}>
          IETE
        </h3>
      </div>

      <div style={{ display: "flex", gap: "2rem", lineHeight: "4.5rem", margin: "0 2vw" }}>

      <a  className="btn-1">
              Home
         </a>
        <a className="btn-1">
          About
        </a>
        <a className="btn-1">
          Projects
        </a>
        <a className="btn-1">
          Team
        </a>
        <a className="btn-1">
          Contact
        </a>
      </div>
    </div>
 )
}