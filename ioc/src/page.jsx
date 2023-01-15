import React from 'react'
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";

import {Home} from "./components/home";
import {Page1} from "./components/page1";
import {Page2} from "./components/page2";

function page() {
  return (
    <BrowserRouter>
    <div>
      <Link to='/'>Home</Link>
      <Link to='/page1'>page1</Link>
      <Link to='/page2'>page2</Link>

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/page1'>
          <Page1/>
        </Route>

        <Route path='/page2'>
          <Page2/>
        </Route>
        
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default page