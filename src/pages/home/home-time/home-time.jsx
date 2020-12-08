import React, { Component } from "react";
import LinkButton from "../../../components/link-button/link-button";
import fuzhoudaxue1 from "../../../assets/images/fuzhoudaxue1.jpg"
import fuzhoudaxue2 from "../../../assets/images/fuzhoudaxue2.jpg"
import beikeda1 from "../../../assets/images/beikeda1.jpg"
import beikeda2 from "../../../assets/images/beikeda2.jpg"

import './home-time.less'

export default class HomeTime extends Component {
    state = {
        index: 0,
        leftCard: 500,
        leftLine: 500,
    }

    changeIndex = (newIndex) => {
        const oldIndex = this.state.index
        const oldleftCard = this.state.leftCard
        const oldleftLine = this.state.leftLine
        const indexChange = newIndex - oldIndex
        const newleftCard = oldleftCard - indexChange * 900
        const newleftLine = oldleftLine - indexChange * 180
        this.setState({
            index: newIndex,
            leftCard: newleftCard,
            leftLine: newleftLine,
        })
    }

    render() {
        const index = this.state.index
        return (
            <div className="home-time">
                <div className="home-top">
                    <p className="page-title">
                        教育经历
                    </p>
                </div>
                <div className="home-bottom" >
                    <ul
                        id="bottom-list"
                        style={{ left: this.state.leftCard + "px" }}
                    >
                        <li className="bottom-item">
                            <div className="home-time-card">
                                <img src={fuzhoudaxue1} alt="" className="time-img" />
                                <div className="words">
                                    <p className="time">2014年9月</p>
                                    <p className="detail">入学福州大学</p>
                                </div>
                            </div>
                        </li>
                        <li className="bottom-item">
                            <div className="home-time-card">
                                <img src={fuzhoudaxue2} alt="" className="time-img" />
                                <div className="words">
                                    <p className="time">2018年6月</p>
                                    <p className="detail">本科顺利毕业</p>
                                </div>
                            </div>
                        </li>
                        <li className="bottom-item">
                            <div className="home-time-card">
                                <img src={beikeda1} alt="" className="time-img" />
                                <div className="words">
                                    <p className="time">2018年9月</p>
                                    <p className="detail">入学北京科技大学</p>
                                </div>
                            </div>
                        </li>
                        <li className="bottom-item">
                            <div className="home-time-card">
                                <img src={beikeda2} alt="" className="time-img" />
                                <div className="words">
                                    <p className="time">2021年1月</p>
                                    <p className="detail">研究生即将毕业</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul
                        id="bottom-line-list"
                        style={{ left: this.state.leftLine + "px" }}
                    >
                        <li className="bottom-line-item">
                            <LinkButton onClick={() => { this.changeIndex(0) }}>
                                <div className={`home-time-line ${index === 0 ? 'timeActive' : 'timeInactive'}`}>

                                </div>
                            </LinkButton>
                        </li>
                        <li className="bottom-line-item">
                            <LinkButton onClick={() => { this.changeIndex(1) }}>
                                <div className={`home-time-line ${index === 1 ? 'timeActive' : 'timeInactive'}`}>

                                </div>
                            </LinkButton>
                        </li>
                        <li className="bottom-line-item">
                            <LinkButton onClick={() => { this.changeIndex(2) }}>
                                <div className={`home-time-line ${index === 2 ? 'timeActive' : 'timeInactive'}`}>

                                </div>
                            </LinkButton>
                        </li>
                        <li className="bottom-line-item">
                            <LinkButton onClick={() => { this.changeIndex(3) }}>
                                <div className={`home-time-line ${index === 3 ? 'timeActive' : 'timeInactive'}`}>

                                </div>
                            </LinkButton>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}