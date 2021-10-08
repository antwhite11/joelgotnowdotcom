import React from "react";
import { Link } from "react-router-dom";
import "./header.css"


function Header (){

return (

<div className= "container-fluid margb">
    <div className = "row">

<nav className=" navbar navbgcolor fixed-top px-3">
  <div className="navbar-brand brandfont" href="#">JoélGotNow</div>

<div>
  <div className="itemfont">
      <div class="active list-inline-item "><Link className="linkfont hoveranimation linkdressing" to="/">HOME</Link>
      </div>
      <span class="active list-inline-item "><Link className="linkfont hoveranimation linkdressing" to="/bio"href="#">BIO</Link>
      </span>
      <span className="list-inline-item "><a className="linkfont hoveranimation linkdressing" href="https://artxsound.biglink.to/joelgotnow">MUSIC</a>
      </span>
      <span className="list-inline-item "><Link className="linkfont hoveranimation linkdressing" to="/contact">CONTACT</Link>
      </span>

    </div>
    </div>

</nav>







    
    
    
    
    
    </div>





</div>







)







}



export default Header