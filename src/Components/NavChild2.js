import React from "react";
import angle from "./Icons/angle-right.svg";
import arrow from "./Icons/Arrow2.svg";
import line from "./Icons/Line.svg";
import "./Style/Header.css";

const NavChild2 = () => {
    return ( 
        <div className="navChild">
            <div className="index">
                <div className="nav-list1">
                    <h4>LEARN<img src={line} alt="an hyphen" /></h4>
                    <div className="nav-item1">
                        <p>Mailchimp 101</p>
                    </div>
                    <div className="nav-item1">
                        <p>Help Center</p>
                    </div>
                    <div className="nav-item1">
                        <p>Marketing Library</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                </div>

                <div className="nav-list1">
                    <h4>COMMUNITY<img src={line} alt="an hyphen" /><span>&#8209;</span></h4>
                    <div className="nav-item1">
                        <p>For Freeland & Agencies</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                    <div className="nav-item1">
                        <p>For Developers</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                    <div className="nav-item1">
                        <p>Hire A Trusted Partner</p>
                    </div>
                </div>
                <div className="sales1">
                    <p>Talk to Sales: +1(800)315-5939</p>
                </div>
                <div className="update1">
                    <p>App Integragtions</p>
                    <p>Connect your digital tools so you can do more with your marketing.</p>
                    <p>See all Integragtions <img src={arrow} alt="an arrow link" /></p>
                </div>
            </div>
        </div>
     );
}
 
export default NavChild2;