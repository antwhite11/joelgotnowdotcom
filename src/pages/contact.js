import React from "react";
import Wrapper from "../components/Wrapper/Wrapper"
import Header from "../components/Header/header";
import Contactpic from "../components/Contactpic/contactpic";
import Contacttext from "../components/Contacttext/contacttext";
import Follow from "../components/Follow/followjoel";
import "./contact.css"



function Contact(){

return(

<Wrapper>
<Header></Header>

<Contactpic></Contactpic>


<Contacttext></Contacttext>

<div className="footmarg">
<Follow></Follow>
</div>







</Wrapper>








)








}



export default Contact