import React from 'react';
import {BrowserRouter, Route,Switch} from "react-router-dom"
import Page from './pages/page';
import Bio from './pages/bio';
import Contact from './pages/contact';
import ScrollToTop from './components/scrolltotop';



function App (){

return (
<BrowserRouter>
<ScrollToTop/>
<Switch>

<Route exact path="/" component={Page}></Route>
<Route path="/bio" component={Bio}></Route>
<Route path="/contact" component={Contact}></Route>


</Switch>
</BrowserRouter>


)





}



export default App
