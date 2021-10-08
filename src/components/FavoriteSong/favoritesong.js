import React from "react";
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";
import "./favoritesong.css"
import favorite from "./favoritesong.jpeg"




function favoritesong(){


return(
<div className="container-fluid p-0 mt-3">
<div className="row justify-content-center">
<div className="col-md-4 border-top border-dark margin">

<Zoom>
<div className="titlefont text-center">FAVORITE SONG</div>
</Zoom>

<LightSpeed>
<div className= "italicsthis text-center">STREAM THE NEW SINGLE <a className="nowlink" href="https://artxsound.biglink.to/joelgotnow">NOW</a></div>
</LightSpeed>




</div>
<div className= "col-md-3  mt-2 mb-3 bord text-center">


<img className="coverEdit" src={favorite} alt="logo" />

    
</div>















</div>
<div className="row justify-content-center">
<div className="col-md-7 border-bottom border-dark">





</div>









</div>










</div>










)




}




export default favoritesong


