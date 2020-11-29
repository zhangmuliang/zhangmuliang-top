import React, { Component } from "react";
import { Carousel } from 'antd';

import carousel1 from "../../../assets/images/carousel1.png";
import carousel2 from "../../../assets/images/carousel2.jpg";
import carousel3 from "../../../assets/images/carousel3.jpg";
import carousel4 from "../../../assets/images/carousel4.png";
import "./home-carousel.less"



export default class HomeCarousel extends Component {

    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 3000,
        }
        return (
            <div className="home-carousel">
                <div className="introduction-box">
                    <p className='introduction'>简介</p>
                    <p className="detail">我叫张木良，这是我的个人简历网站。</p>
                </div>
                <Carousel {...settings}>
                    <div className="home-carousel-item">
                        <img src={carousel1} alt="a" />
                    </div>
                    <div className="home-carousel-item">
                        <img src={carousel2} alt="b" />
                    </div>
                    <div className="home-carousel-item">
                        <img src={carousel3} alt="c" />
                    </div>
                    <div className="home-carousel-item">
                        <img src={carousel4} alt="d" />
                    </div>
                </Carousel>
            </div>

        )
    }
}