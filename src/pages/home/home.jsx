import React, { Component } from "react";
import HomeCarousel from "./home-carousel/home-carousel";
import HomeContact from "./home-contact/home-contact";
import HomeInformation from "./home-information/home-information";
import HomeTime from "./home-time/home-time";

export default class Home extends Component{

    render () {
        return (
            <div>
                <HomeCarousel />
                <HomeInformation />
                <HomeTime />
                <HomeContact />
            </div>
        )
    }
}