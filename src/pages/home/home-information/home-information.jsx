import React, { Component } from "react";

import { LeftOutlined, RightOutlined } from "@ant-design/icons"

import inform1 from "../../../assets/images/inform1.jpg"
import inform2 from "../../../assets/images/inform2.jpg"
import inform3 from "../../../assets/images/inform3.jpg"
import inform4 from "../../../assets/images/inform4.jpg"

import "./home-information.less"
import LinkButton from "../../../components/link-button/link-button";
import { MOVE_LENGTH,IMG_LENGTH } from "../../../utils/constants";

var moving = false;
export default class HomeInformation extends Component {
    state = {
        left: -IMG_LENGTH
    }

    clickLeft = () => {
        if (moving) {
            return
        } else {
            moving = true
        }
        let newleft = this.state.left;
        const targetleft = newleft + IMG_LENGTH;
        var interval = setInterval(() => {
            if (newleft === targetleft - MOVE_LENGTH) {
                clearInterval(interval)
                moving = false
            }
            newleft += MOVE_LENGTH;
            this.setState({
                left: newleft,
            })
            if (newleft >= 0) {
                this.setState({
                    left: -140,
                })
            }
        }, 20);
    }

    clickRight = () => {
        if (moving) {
            return
        } else {
            moving = true
        }
        let newleft = this.state.left;
        const targetleft = newleft - IMG_LENGTH;
        var interval = setInterval(() => {
            if (newleft === targetleft + MOVE_LENGTH) {
                clearInterval(interval)
                moving = false
            }
            newleft -= MOVE_LENGTH;
            this.setState({
                left: newleft,
            })
            if (newleft <= -175) {
                this.setState({
                    left: -IMG_LENGTH,
                })
            }
        }, 20);
    }


    render() {
        return (
            <div className="home-information">
                <div className="information-left">
                    <p id="base-information" className="page-title">
                        基本信息
                    </p>
                    <p className="detail">
                        前端初学者一枚，这是我的第一个项目，基于React技术栈，设计风格仿照字节跳动官方网站。
                    </p>
                    <p className="detail">
                        网站中还存在着许多不足之处，将在未来的日子里不断优化。
                    </p>
                </div>
                <div className="information-right" >
                    <LinkButton id="left-button">
                        <LeftOutlined onClick={() => { this.clickLeft() }} />
                    </LinkButton>

                    <ul id="img-ul"
                        style={{ left: this.state.left + "vw" }}
                    >
                        <li className="img-list">
                            <img src={inform4} alt="-4" />
                            <div className="bottom">
                                <p className="title">额外信息</p>
                                <ul className="detail-ul">
                                    <li className="detail-li">英语CET-6</li>
                                    <li className="detail-li">实习时间充足</li>
                                    <li className="detail-li">对前端有热情</li>
                                </ul>
                            </div>
                        </li>
                        <li className="img-list">
                            <img src={inform1} alt="1" />
                            <div className="bottom">
                                <p className="title">个人信息</p>
                                <ul className="detail-ul">
                                    <li className="detail-li">性别：男</li>
                                    <li className="detail-li">学历：硕士</li>
                                    <li className="detail-li">生日：1996.10.03</li>
                                </ul>
                            </div>
                        </li>
                        <li className="img-list">
                            <img src={inform2} alt="2" />
                            <div className="bottom">
                                <p className="title">北京科技大学</p>
                                <ul className="detail-ul">
                                    <li className="detail-li">硕士在读</li>
                                    <li className="detail-li">211高校</li>
                                    <li className="detail-li">计算机与通信工程学院</li>
                                </ul>
                            </div>
                        </li>
                        <li className="img-list">
                            <img src={inform3} alt="3" />
                            <div className="bottom">
                                <p className="title">福州大学</p>
                                <ul className="detail-ul">
                                    <li className="detail-li">本科毕业</li>
                                    <li className="detail-li">211高校</li>
                                    <li className="detail-li">物理与信息工程学院</li>
                                </ul>
                            </div>
                        </li>
                        <li className="img-list">
                            <img src={inform4} alt="4" />
                            <div className="bottom">
                                <p className="title">额外信息</p>
                                <ul className="detail-ul">
                                    <li className="detail-li">英语CET-6</li>
                                    <li className="detail-li">实习时间充足</li>
                                    <li className="detail-li">对前端有热情</li>
                                </ul>
                            </div>
                        </li>
                        <li className="img-list">
                            <img src={inform1} alt="+1" />
                            <div className="bottom">
                                <p className="title">个人信息</p>
                                <ul className="detail-ul">
                                    <li className="detail-li">性别：男</li>
                                    <li className="detail-li">学历：硕士</li>
                                    <li className="detail-li">生日：1996.10.03</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <LinkButton id="right-button">
                        <RightOutlined onClick={() => { this.clickRight() }} />
                    </LinkButton>
                </div>
            </div>

        )
    }
}