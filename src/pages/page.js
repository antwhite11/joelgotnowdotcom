import React from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/Header/header";
import ImageDiv from "../components/Image/imageDiv";
import Currentevents from "../components/CurrentEvents/currentevents";
import Favoritesong from "../components/FavoriteSong/favoritesong";
import Options from "../components/Options/Options";
import Follow from "../components/Follow/followjoel";
import Ecstacy from "../components/Ecstacy/ecstacy";



function Page (){
return (
<div>
<Wrapper>
<Header></Header>
<ImageDiv></ImageDiv>
<Currentevents></Currentevents>
<Favoritesong></Favoritesong>
<Options></Options>
<Ecstacy></Ecstacy>
<Follow></Follow>
</Wrapper>







</div>






)




}



export default Page