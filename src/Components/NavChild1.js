import React from "react";
import angle from "./Icons/angle-right.svg";
import arrow from "./Icons/Arrow2.svg";
import line from "./Icons/Line.svg";
import "./Style/Header.css";

const NavChild1 = () => {
    return ( 
        <div className="navChild">
            <div className="index">
                <div className="nav-list1">
                    <h4>WE'LL HELP YOU <img src={line} alt="an hyphen" /></h4>
                    <div className="nav-item1">
                        <p>Get Your Business Online</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                    <div className="nav-item1">
                        <p>Market Your Business</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                </div>

                <div className="nav-list1">
                    <h4>PLATFORM FEATURES<img src={line} alt="an hyphen" /></h4>
                    <div className="nav-item1">
                        <p>Audience Management</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                    <div className="nav-item1">
                        <p>Creative Tools</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                    <div className="nav-item1">
                        <p>Marketing Automation</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                    <div className="nav-item1">
                        <p>Insights & Analytics</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                </div>
                <div className="nav-list1">
                    <h4>NOT SURE WHERE TO START?<img src={line} alt="an hyphen" /></h4>
                    <div className="nav-item1">
                        <p>What's Right for Me?</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                </div>
                <div className="sales1">
                    <p>Talk to Sales: +1(800)315-5939</p>
                </div>
                <div className="update1">
                    <p>Product Update</p>
                    <p>Get the latest on new features, product improvements, and other announcements.</p>
                    <p>See what's new <img src={arrow} alt="an arrow link" /></p>
                </div>
            </div>
        </div>
     );
}
 
export default NavChild1;