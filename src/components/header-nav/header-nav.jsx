import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import LinkButton from "../link-button/link-button"

import logo from "../../assets/images/logo.png";
import "./header-nav.less"

class HeaderNav extends Component {
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
            <div className={`header-nav ${active}`}>
                <Link to="/home" className="header-nav-left">
                    <img src={logo} alt="logo" />
                </Link>

                <div className="header-nav-right">
                    <LinkButton onClick={() => this.props.history.push('/home')}>
                        <span className="nav-item">关于小张</span>
                    </LinkButton>
                    <LinkButton onClick={() => this.props.history.push('/technology')}>
                        <span className="nav-item">我的技术栈</span>
                        </LinkButton>
                    <LinkButton><span className="nav-item">项目经历</span></LinkButton>
                    <LinkButton><span className="nav-item">求职目标</span></LinkButton>
                    <LinkButton><span className="nav-item">学习博客</span></LinkButton>
                </div>
            </div>
        )
    }
}

export default withRouter(HeaderNav)