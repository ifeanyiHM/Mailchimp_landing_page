import React from "react";
import angle from "./Icons/angle-right.svg";
import logo from "./Icons/mailchimp.svg";
import arrowp from "./Icons/Arrow-up-right.svg";
import "./Style/Header.css";

const NavChild3 = () => {
    return ( 
        <div className="navChild">
            <div className="index">
                <div className="nav-list1">
                    <div className="ft2-ct1">
                        <img src={logo} alt="mailchimps logo" />
                        <h2>mailchimp <span>presents</span></h2>
                        <img  className="angle-arrow" src={arrowp} alt="arrow icon" />
                    </div>
                    <div className="nav-item1">
                        <p>Podcasts</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                    <div className="nav-item1">
                        <p>Series</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                    <div className="nav-item1">
                        <p>Films</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                </div>

                <div className="nav-list1">
                    <div className="ft2-ct3">
                        <img src={logo} alt="mailchimps logo" />
                        <span>&#8260;</span>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkBIZEv6X35Y5Qob4MeoOZAe5fkfhxn8_Nj_LQD0_V7IbTC1JW0JpWIrbrEbDyN9DeVw&usqp=CAU" alt="a courier" />
                        <h1>Courier</h1>
                        <img  className="angle-arrow" src={arrowp} alt="arrow icon" />
                    </div>
                    <div className="nav-item1">
                        <p>Expert Insights</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                    <div className="nav-item1">
                        <p>Industrial Trends</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                    <div className="nav-item1">
                        <p>Smart Living</p>
                        <img src={angle} alt="a navigation icon" />
                    </div>
                </div>
                <div className="sales1">
                    <p>Talk to Sales: +1(800)315-5939</p>
                </div>
            </div>
        </div>
     );
}
 
export default NavChild3;