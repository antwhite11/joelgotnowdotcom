import React from "react";
import "./bioimage.css"
import pic from "./N2DEEP.JPG"
import Zoom from "react-reveal/Zoom"
import Slide from "react-reveal/Slide"





function Bioimage(){


    console.log("hey")

return(

        <div className="container-fluid margt">
        <div className= "row mobmarg">
        
        <div className="col-md-6  nextmarg mt-2">
        <div className="mt-3  ">
        <div className="text-center headfont">


       <span className="line"> Next.</span> Now.


        </div>

       <Zoom> <div className="mx-4 mt-2 spacing text-center">

        JoélGotNow, is a trailblazing artist defying the norms of contemporary R&B with a style of his own creation - Lost Soul Music. His influences range from Prince & Whitney Houston to Miguel and 90's/2000-era classics; infusing layered, urgent lyrics with emotion and purpose. 

His path was cemented in 2018 following the death of his grandmother. He saw her in a dream, and she told him to pursue a career in music. He's never looked back since. Pain, pleasure and sincerity define his sound...ambition and consistency define his future.

JoélGotNow released his label debut WYA? (Prod. Antman) in January 2021.





        </div>
</Zoom>
        </div>














 </div>
      <div className= "col-md-6 nextmarg text-center">

 
       <Slide left={true}> <img className= "imgSize" src={pic} alt="joel"></img></Slide>










        </div>






        </div>

        <div className="row justify-content-center">
        <div className= "col-md-6 border-bottom">





        </div>







        </div>



        

       




   


        </div>




















)






}




export default Bioimage