import React, { Component } from "react";
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";

import HeaderNav from "./components/header-nav/header-nav";
import FooterNav from "./components/footer-nav/footer-nav";
import Home from "./pages/home/home";
import TechnologyStack from "./pages/technology-stack/technology-stack";
import Target from "./pages/target/target";

import './App.less'
import Project from "./pages/project/project";
export default class App extends Component {

    render() {
        return (
            <div className="layout" style={{overflowX: 'hidden'}}>
                <BrowserRouter>
                    <HeaderNav />
                    <div className="content-nav">
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/technology' component={TechnologyStack}/>
                            <Route path='/target' component={Target}/>
                            <Route path='/project' component={Project}/>
                            <Redirect to='/home' />
                        </Switch>
                    </div>
                    <FooterNav />
                </BrowserRouter>
            </div>
        )
    }
}
