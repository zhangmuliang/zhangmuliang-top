import React, { Component } from "react";

import "./home-contact.less"

export default class HomeContact extends Component {

    render() {
        return (
            <div className="home-contact">

                <div className="home-contact-top">
                    <p id='contact-zhang' className="title">
                        联系方式
                    </p>
                </div>
                <div className="home-contact-bottom" >
                    <div className="title-small">
                        <p>电子邮箱</p>
                        <a href="#contact-zhang" className="contact-item">714978916@qq.com</a>
                    </div>
                    <div className="title-small">
                        <p>微信账号</p>
                        <a href="#contact-zhang" className="contact-item">GemOfLove14</a>
                    </div>
                    <div className="title-small">
                        <p>手机号码</p>
                        <a href="#contact-zhang" className="contact-item">15659736716</a>
                    </div>
                    <div className="title-small">
                        <p>代码仓库</p>
                        <a href="https://github.com/zhangmuliang" className="contact-item">https://github.com/zhangmuliang</a>
                    </div>
                </div>
            </div>
        )
    }
}