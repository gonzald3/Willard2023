import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../assets/css/carousel.css";

export default class Testimonials extends Component {
    render() {
        return (
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={5100}
            >
                <div>
                    <img src={require("../Img/Patricia Strickland.jpg")} />
                    <div className="myCarousel">
                        <h3>Patricia Strickland</h3>
                        <h4>Home Instead Senior Care</h4>
                        <p>
                            They really had a genuine interest in our business and willingness
                            to build out the office the way we wanted to suit our needs.
                            The property manager on site is very helpful. When you need something,
                            they’re just a phone call away, they have been very responsive.
                        </p>
                    </div>
                </div>

                <div>
                    <img src={require("../Img/Dr. Jeffrey Tucker.jpg")} />
                    <div className="myCarousel">
                        <h3>Dr. Jeffrey Tucker</h3>
                        <h4>Premier Physical Therapy</h4>
                        <p>
                            Everything here from the initial conversation with the
                            broker all the way through development, I can never once say
                            I was disappointed. Everything was handled professionally and
                            in a timely manner. If every project went as easy as this
                            project did my life would have been a lot easier at my other offices.
                        </p>
                    </div>
                </div>

                <div>
                    <img src={require("../Img/Dr. Lee Cropped.jpg")} />
                    <div className="myCarousel">
                        <h3>Dr. Lee</h3>
                        <h4>Lee Plastic Surgery</h4>
                        <p>
                            The Willard team managed the construction efficiently and
                            was also very helpful in assisting with the design.
                            Our new office space has enhanced our overall patient care.
                        </p>
                    </div>
                </div>
            </Carousel>
        );
    }
}
