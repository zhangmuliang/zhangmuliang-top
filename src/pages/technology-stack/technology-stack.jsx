import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import htmlImg from "../../assets/images/html.png"
import cssImg from "../../assets/images/css.png"
import jsImg from "../../assets/images/js.png"
import esImg from "../../assets/images/es6.png"
import reactImg from "../../assets/images/react.png"
import gitImg from "../../assets/images/git.png"
import LinkButton from "../../components/link-button/link-button";
import {throttle} from "../../utils/throttle"

import "./technology-stack.less"

class TechnologyStack extends Component {
    state = {
        index: 0,
        translateY: 0,
    }

    changeIndex = (newIndex) => {
        const newtranslateY = - newIndex * 100
        this.setState({
            index: newIndex,
            translateY: newtranslateY,
        })
    }

    changeWheel = (e) => {
        const getUl = document.getElementById('technology-back')
        const maxWheel = getUl.childElementCount - 1;
        const oldIndex = this.state.index
        let newIndex
        if (e.deltaY > 0) {
            newIndex = (oldIndex + 1 >= maxWheel) ? maxWheel : oldIndex + 1
        } else if (e.deltaY < 0) {
            newIndex = (oldIndex - 1 <= 0) ? 0 : oldIndex - 1
        }
        console.log(newIndex)
        const newtranslateY = - newIndex * 100
        this.setState({
            index: newIndex,
            translateY: newtranslateY,
        })
    }

    throttleChangeWheel = throttle(this.changeWheel,1000)

    render() {
        const { index, translateY } = this.state
        return (
            <div className="background-wrapper">
                <ul
                    id="technology-back"
                    onWheel={(e) => this.throttleChangeWheel(e)}
                    style={{ transform: 'translateY(' + translateY + '%)' }}
                >
                    <li className="img-items">
                        <div id="technology-html" className="background-img">
                            <div className="item-left-wrapper">
                                <p className="page-title">HTML</p>
                                <p className="proficiency">
                                    了解
                                    &lt;
                                    熟悉
                                    &lt;
                                    <span>掌握</span>
                                    &lt;
                                    精通
                                </p>
                                <p className="detail">秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。</p>
                            </div>
                        </div>
                    </li>
                    <li className="img-items">
                        <div id="technology-css" className="background-img">
                            <div className="item-left-wrapper">
                                <p className="page-title">CSS</p>
                                <p className="proficiency">
                                    了解
                                    &lt;
                                    熟悉
                                    &lt;
                                    <span>掌握</span>
                                    &lt;
                                    精通
                                </p>
                                <p className="detail">春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。</p>
                            </div>
                        </div>
                    </li>
                    <li className="img-items">
                        <div id="technology-js" className="background-img">
                            <div className="item-left-wrapper">
                                <p className="page-title">JavaScript</p>
                                <p className="proficiency">
                                    了解
                                    &lt;
                                    熟悉
                                    &lt;
                                    <span>掌握</span>
                                    &lt;
                                    精通
                                </p>
                                <p className="detail">君自故乡来，应知故乡事。来日绮窗前，寒梅著花未？</p>
                            </div>
                        </div>
                    </li>
                    <li className="img-items">
                        <div id="technology-es6" className="background-img">
                            <div className="item-left-wrapper">
                                <p className="page-title">ES6</p>
                                <p className="proficiency">
                                    了解
                                    &lt;
                                    熟悉
                                    &lt;
                                    <span>掌握</span>
                                    &lt;
                                    精通
                                </p>
                                <p className="detail">朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。</p>
                            </div>
                        </div>
                    </li>
                    <li className="img-items">
                        <div id="technology-react" className="background-img">
                            <div className="item-left-wrapper">
                                <p className="page-title">React</p>
                                <p className="proficiency">
                                    了解
                                    &lt;
                                    <span>熟悉</span>
                                    &lt;
                                    掌握
                                    &lt;
                                    精通
                                </p>
                                <p className="detail">松下问童子，言师采药去。只在此山中，云深不知处。</p>
                            </div>
                        </div>
                    </li>
                    <li className="img-items">
                        <div id="technology-git" className="background-img">
                            <div className="item-left-wrapper">
                                <p className="page-title">Git</p>
                                <p className="proficiency">
                                    了解
                                    &lt;
                                    <span>熟悉</span>
                                    &lt;
                                    掌握
                                    &lt;
                                    精通
                                </p>
                                <p className="detail">白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="icon-wrapper">
                    <ul id="technology-icon">
                        <li className="icon-items">
                            <LinkButton onClick={() => { this.changeIndex(0) }}>
                                <div className={`icon-line ${index === 0 ? 'iconActive' : 'iconInactive'}`}>
                                    <img src={htmlImg} alt="html" />
                                </div>
                            </LinkButton>
                        </li>
                        <li className="icon-items">
                            <LinkButton onClick={() => { this.changeIndex(1) }}>
                                <div className={`icon-line ${index === 1 ? 'iconActive' : 'iconInactive'}`}>
                                    <img src={cssImg} alt="css" />
                                </div>
                            </LinkButton>
                        </li>
                        <li className="icon-items">
                            <LinkButton onClick={() => { this.changeIndex(2) }}>
                                <div className={`icon-line ${index === 2 ? 'iconActive' : 'iconInactive'}`}>
                                    <img src={jsImg} alt="js" />
                                </div>
                            </LinkButton>
                        </li>
                        <li className="icon-items">
                            <LinkButton onClick={() => { this.changeIndex(3) }}>
                                <div className={`icon-line ${index === 3 ? 'iconActive' : 'iconInactive'}`}>
                                    <img src={esImg} alt="es" />
                                </div>
                            </LinkButton>
                        </li>
                        <li className="icon-items">
                            <LinkButton onClick={() => { this.changeIndex(4) }}>
                                <div className={`icon-line ${index === 4 ? 'iconActive' : 'iconInactive'}`}>
                                    <img src={reactImg} alt="react" />
                                </div>
                            </LinkButton>
                        </li>
                        <li className="icon-items">
                            <LinkButton onClick={() => { this.changeIndex(5) }}>
                                <div className={`icon-line ${index === 5 ? 'iconActive' : 'iconInactive'}`}>
                                    <img src={gitImg} alt="git" />
                                </div>
                            </LinkButton>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(TechnologyStack)