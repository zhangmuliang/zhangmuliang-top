import React, { Component } from "react";
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import TechnologyStack from "./pages/technology-stack/technology-stack";
import HeaderNav from "./components/header-nav/header-nav";
import FooterNav from "./components/footer-nav/footer-nav";

export default class App extends Component {
    state = {
        active: "active",
    }

    componentDidMount() {
        window.addEventListener('wheel', (e) => {
            if (e.deltaY > 0) {
                this.setState({
                    active: "inactive"
                })
            } else if (e.deltaY < 0) {
                this.setState({
                    active: "active"
                })
            }
        })
    }

    render() {
        const active = this.state.active
        return (
            <div className="layout" style={{overflowX: 'hidden'}}>
                <BrowserRouter>
                    <HeaderNav active={active} />
                    <div className="content-nav">
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/technology' component={TechnologyStack}/>
                            <Redirect to='/home' />
                        </Switch>
                    </div>
                    <FooterNav />
                </BrowserRouter>
            </div>
        )
    }
}
