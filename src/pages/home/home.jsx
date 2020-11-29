import React, { Component } from "react";
import HomeCarousel from "./home-carousel/home-carousel";
import HomeInformation from "./home-information/home-information";

export default class Home extends Component{

    render () {
        return (
            <div>
                <HomeCarousel />
                <HomeInformation />
            </div>
        )
    }
}