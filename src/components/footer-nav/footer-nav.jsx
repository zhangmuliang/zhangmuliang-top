import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import LinkButton from "../link-button/link-button";
import {ArrowRightOutlined} from "@ant-design/icons"

import logo from "../../assets/images/logo.png";
import "./footer-nav.less"

class FooterNav extends Component {

    render() {
        return (
            <div className="footer-nav">
                <div className="footer-wrapper">
                    <Link to="/home" className="footer-nav-left">
                        <img src={logo} alt="logo" />
                    </Link>

                    <div className="footer-nav-right">
                        <div className="nav-right">
                            <p>关于小张</p>
                            <LinkButton>
                                <p className="nav-item">企业文化</p>
                            </LinkButton>
                            <LinkButton>
                                <p className="nav-item">大事记</p>
                            </LinkButton>
                            <LinkButton>
                                <p className="nav-item">我的技术栈</p>
                            </LinkButton>
                            <LinkButton>
                                <p className="nav-item">联系小张</p>
                            </LinkButton>
                        </div>

                        <div className="nav-right">
                            <p>求职意向</p>
                            <LinkButton>
                                <p className="nav-item">求职意向</p>
                            </LinkButton>
                        </div>
                        <div className="nav-right">
                            <p>项目经历</p>
                            <LinkButton>
                                <p className="nav-item">React商品后台管理页面</p>
                            </LinkButton>
                            <LinkButton>
                                <p className="nav-item">仿字节跳动官网个人简历</p>
                            </LinkButton>
                        </div>
                        <div className="nav-right">
                            <p>学习博客</p>
                            <LinkButton>
                                <p className="nav-item">
                                    学习博客
                                    <ArrowRightOutlined style={{marginLeft:"2px"}}/>
                                </p>
                            </LinkButton>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>2020 张木良</p>
                    <p>待备案</p>
                </div>
            </div>
        )
    }
}
export default withRouter(FooterNav)