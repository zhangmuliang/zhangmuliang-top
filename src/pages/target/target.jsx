import React, { Component } from "react";

import "./target.less"

export default class Target extends Component {
    state = {
        index: 0,
    }

    changeIndex = (newIndex) => {
        this.setState({
            index: newIndex,
        })
    }

    render() {
        const index = this.state.index
        return (
            <div className="target-out">
                <div className="target-wrapper">
                    <div className="target-inner">
                        <div className="page-title">
                            求职意向
                        </div>

                        <div className={`target-list ${index === 0 ? 'active' : ''}`}>
                            <div className="target-item" onClick={() => { this.changeIndex(0) }}>
                                <div className="target-title">期望岗位</div>
                                <div className="target-icon">+</div>
                            </div>
                            <div className="target-detail">
                                <p>前端实习生</p>
                            </div>
                        </div>

                        <div className={`target-list ${index === 1 ? 'active' : ''}`}>
                            <div className="target-item" onClick={() => { this.changeIndex(1) }}>
                                <div className="target-title">期望城市</div>
                                <div className="target-icon">+</div>
                            </div>
                            <div className="target-detail">
                                <p>全国</p>
                            </div>
                        </div>

                        <div className={`target-list ${index === 2 ? 'active' : ''}`}>
                            <div className="target-item" onClick={() => { this.changeIndex(2) }}>
                                <div className="target-title">可入职时间</div>
                                <div className="target-icon">+</div>
                            </div>
                            <div className="target-detail">
                                <p>
                                    北京：随时可入职
                                    <br />
                                    全国：2020/12/20之后
                                </p>
                            </div>
                        </div>

                        <div className={`target-list ${index === 3 ? 'active' : ''}`}>
                            <div className="target-item" onClick={() => { this.changeIndex(3) }}>
                                <div className="target-title">可支配时间</div>
                                <div className="target-icon">+</div>
                            </div>
                            <div className="target-detail">
                                <p>已完成研究生毕业论文盲审与查重，可支配时间充足。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}