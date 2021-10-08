import React from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/header";
import Bioimage from "../components/BioImage/bioimage";
import Biolinkcard from "../components/BioLinkCards/biolinkcards";
import joelpic from "../components/BioLinkCards/images/Screenshot.JPG"
import Biolinkcard2 from "../components/BioLinkCard2/biolinkcard2";
import joelpic2 from "../components/BioLinkCard2/screenshot3.JPG";
import Follow from "../components/Follow/followjoel";
import "./bio.css"






function Bio(){
return(


<Wrapper>
<Header></Header>
<Bioimage></Bioimage>
<Biolinkcard pic={joelpic} phrase="JoélGotNow covers Drake and Future's N2Deep"></Biolinkcard>
<Biolinkcard2 pic={joelpic2} phrase="JoélGotNow on Apple Music"></Biolinkcard2>

<div className="mobilemarg">
<Follow></Follow>
</div>







</Wrapper>



)



}





export default Bio