import React, { Component } from "react";

import './project.less'
export default class Project extends Component{

    render () {
        return (
            <div className="background-wrapper">
                <div className="project-wrapper">
                    <div className="project-card">
                        <div className="face1"> 
                            <div className="page-title">
                                React后台管理项目
                            </div>
                        </div>
                        <div className="face2"> 
                            <div className="detail">
                                <p>此项目为一个后台管理的SPA，包括用户管理 / 商品分类管理 / 商品管理 / 权限管理等功能模块。</p>
                                <p>项目采用React 全家桶 + Antd + Axios + ES6等技术。具体源码可参考：</p>
                                <a href="https://github.com/zhangmuliang/react-admin_client" target="_blank">https://github.com/zhangmuliang/react-admin_client</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="face1">
                            <div className="page-title">
                                官网式个人简历
                            </div>
                        </div>
                        <div className="face2">
                            <div className="detail">
                            <p>此项目为独立开发的官网式个人简历，设计风格参照字节跳动官方网站，包含个人求职信息。</p>
                                <p>项目主要采用React 全家桶，以组件化模式开发。具体源码可参考：</p>
                                <a href="https://github.com/zhangmuliang/zhangmuliang-top" target="_blank">https://github.com/zhangmuliang/zhangmuliang-top</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}