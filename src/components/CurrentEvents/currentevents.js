import React from "react"
import Slide from "react-reveal/Slide"
import "./currentevents.css"
import cover from "./wyacover.jpeg"




function Currentevents() {

return (

<div>
<div className="container-fluid bgcolor">
<div className= "row">

<div className="col-md-12 current">




"WYA?" Out Now

</div>

</div>

<div className="row">
<div className ="col-md-12 platforms">


STREAMING ON ALL <a className= "linkprops" href="https://artxsound.biglink.to/joelgotnow">PLATFORMS</a>





</div>







</div>

<div className= "row ">
<div className= "col-md-12 mb-2 centerImg">

    

<a className= "mymargin" href="https://open.spotify.com/track/5dI6O21WJRVxnfoKM8XSAB?si=KZz5TkacSx-dEXyDVr2pHg&nd=1"><img className="coverEdit" src={cover} alt="logo" /></a>





















</div>









</div>


<div className="row">
<Slide duration={2000} right={true}>
<div className="col-12-md mb-4 text-center">



<iframe className="wyavid" width="500" height="285" src="https://www.youtube.com/embed/oamollgvoUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>









</div>
</Slide>










</div>









</div>

</div>










)





}






export default Currentevents