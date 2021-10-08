import React from "react";
import "./imageDiv.css"
import Joel from "./joel.JPG"
import Zoom from "react-reveal/Zoom"



function imageDiv (){

return(


       <div className="container-fluid m-0 p-0">
          

          <Zoom>
            <div className= "scrollable">
                
    <img className= "imageEdit" src={Joel} alt="logo"  />
    </div>



</Zoom>

 


    </div>





     




















)





}


export default imageDiv