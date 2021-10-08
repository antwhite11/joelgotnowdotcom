import React from "react";
import Slide from "react-reveal/Slide"
import Zoom from "react-reveal/Zoom"
import "./followjoel.css"
import insta from "./instalogo.png"
import twitter from "./twitter.png"
import spotify from "./spotify.png"





function Follow (){

return (

<div className="container-fluid followmarg">
<div className="row">
<Zoom>
<div className="col-md-12 text-center mt-5 followtext">



Follow JoélGotNow








</div>

</Zoom>









</div>

<div className="row">
<Slide right={true}>
<div className="col-md-12 mb-4 text-center sibling-fade">
<a href="https://twitter.com/southsidejoey_"><img className="twitter" src={twitter} alt="twitter"/></a>
<a href="https://instagram.com/joelgotnow"><img className="insta" src={insta} alt="insta"/></a>
<a href="https://open.spotify.com/artist/4t65UhFdhuMgHsvLe4kzfD?si=P2n26ZapRnmffW_tv28Lgw&dl_branch=1"><img className="spotify" src={spotify} alt="spotify"></img></a>











</div>
</Slide>










</div>

<div className="row mt-2margerase justify-content-center">
<div className="col-md-4 border-top border-dark text-center">


<a className="linksize" href="https://www.artxsound.us">www.artxsound.com</a>









</div>













</div>











</div>












)








}


export default Follow