import React, { Component } from "react";
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import TechnologyStack from "./pages/technology-stack/technology-stack";
import HeaderNav from "./components/header-nav/header-nav";
import FooterNav from "./components/footer-nav/footer-nav";

export default class App extends Component {

    render() {
        return (
            <div className="layout" >
                <BrowserRouter>
                    <HeaderNav/>
                    <div className="content-nav">
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/technology' component={TechnologyStack} />
                            <Redirect to='/home' />
                        </Switch>
                    </div>
                    <FooterNav />
                </BrowserRouter>
            </div>
        )
    }
}
