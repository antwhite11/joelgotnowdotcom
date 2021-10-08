import React from "react";
import Slide from "react-reveal/Slide"
import "./biolinkcards.css"




function Biolinkcard (props){
return(


<div className="container-fluid">

    <div className="row mt-3 ">

    <div className="col-md-12 mt-5">
    <Slide right={true}>
    <div className="text-center pos">

  

    <img  className="picstats mobsize divpos" src={props.pic} alt="pic"></img>


    <a href="https://www.instagram.com/tv/CUOVAVhgyVK/?utm_source=ig_web_button_share_sheet" alt="drakecover" className="textstats divpos">{props.phrase}</a>

    </div>

    </Slide>

   












    </div>




    </div>





</div>













)









}



export default Biolinkcard