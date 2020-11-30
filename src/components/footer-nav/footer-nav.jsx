import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
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
                            <a href="/#">
                                <p className="nav-item">基本信息</p>
                            </a>
                            <a href="/#">
                                <p className="nav-item">教育经历</p>
                            </a>
                            <a href="/#">
                                <p className="nav-item">我的技术栈</p>
                            </a>
                            <a href="/#">
                                <p className="nav-item">联系方式</p>
                            </a>
                        </div>

                        <div className="nav-right">
                            <p>求职意向</p>
                            <a href="/#">
                                <p className="nav-item">求职意向</p>
                            </a>
                        </div>
                        <div className="nav-right">
                            <p>项目经历</p>
                            <a href="/#">
                                <p className="nav-item">React商品后台管理页面</p>
                            </a>
                            <a href="/#">
                                <p className="nav-item">仿字节跳动官网个人简历</p>
                            </a>
                        </div>
                        <div className="nav-right">
                            <p>学习博客</p>
                            <a href="/#">
                                <p className="nav-item">
                                    学习博客
                                    <ArrowRightOutlined style={{marginLeft:"2px"}}/>
                                </p>
                            </a>
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