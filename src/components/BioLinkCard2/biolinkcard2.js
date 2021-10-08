import React from "react";
import Slide from "react-reveal/Slide"
import "./biolinkcard2.css"




function Biolinkcard2 (props){
return(


<div className="container-fluid contmarg">
    <div className="row margrow mt-3 ">

    <div className="col-md-12 mt-5">
    <Slide left={true}>
    <div className="text-center pos">

    

    <img  className="picstats mobsize divpos" src={props.pic} alt="pic"></img>


    <a href="https://music.apple.com/us/artist/joélgotnow/1549302635" alt="applemusic" className="textstats2 divpos">{props.phrase}</a>

    </div>

    </Slide>

   












    </div>




    </div>





</div>













)









}



export default Biolinkcard2