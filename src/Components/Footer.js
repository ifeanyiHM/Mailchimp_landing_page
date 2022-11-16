import React from "react";
import "./Style/Footer.css"
import logo from "./Icons/mailchimp.svg";
import arrow from "./Icons/Arrow3.svg";
import facebook from "./Icons/square-facebook.svg";
import twitter from "./Icons/twitter.svg";
import instagram from "./Icons/instagram.svg";
import linkedin from "./Icons/linkedin.svg";
import youtube from "./Icons/youtube.svg";
import pinterest from "./Icons/pinterest.svg";

const Footer = () => {
    return ( 
        <>
            <div className="Footer">
                <div className="flex-ft">
                    <div className="grid-ft">
                        <div>
                            <h4>Products</h4>
                            <ul>
                                <li><a href="#">Why Mailchimp?</a></li>
                                <li><a href="#">Product Updates</a></li>
                                <li><a href="#">Emil Marketing</a></li>
                                <li><a href="#">Website</a></li>
                                <li><a href="#">Transactional Email</a></li>
                                <li><a href="#">How We Compare</a></li>
                                <li><a href="#">GDPR Compliance</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Status</a></li>
                                <li><a href="#">Mobile App</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Marketing Library</a></li>
                                <li><a href="#">Free Marketing Tools</a></li>
                                <li><a href="#">Marketing Glossary</a></li>
                                <li><a href="#">Integrations Directory</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Community</h4>
                            <ul>
                                <li><a href="#">Agencies & Freelancers</a></li>
                                <li><a href="#">Developers</a></li>
                                <li><a href="#">Events</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Newsroom</a></li>
                                <li><a href="#">Annual Report</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Accessibility</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Help</h4>
                            <ul>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Hire an Expert</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Talk to sales</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid-ft2">
                        <div className="ft2-ct">
                            <div className="ft2-ct1">
                                <img src={logo} alt="mailchimps logo" />
                                <h2>mailchimp <span>presents</span></h2>
                            </div>
                            <p>Films, podcasts, and original series that celebrate the entrepreneurial spirit.</p>
                            <p className="cour">Check it out <img src={arrow} alt="an arrow link" /></p>
                        </div>
                        <div className="ft2-ct2">
                            <div className="ft2-ct3">
                                <img src={logo} alt="mailchimps logo" />
                                <span>&#8260;</span>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkBIZEv6X35Y5Qob4MeoOZAe5fkfhxn8_Nj_LQD0_V7IbTC1JW0JpWIrbrEbDyN9DeVw&usqp=CAU" alt="a courier" />
                                <h1>Courier</h1>
                            </div>
                            <p>Expert insights, industry trends, and inspiring stories that help you live and work on your own terms.</p>
                            <p className="cour">Learn more <img src={arrow} alt="an arrow link" /></p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="Footer2">
                <div className="app-store">
                    <img src="https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?w=320&fm=webp&q=80" alt="apple app store" />
                    <img src="https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?w=320&fm=webp&q=80" alt="google play store" />
                </div>
                <div className="social-med">
                    <img src={facebook} alt="facebook logo" />
                    <img src={twitter} alt="twitter logo" />
                    <img src={instagram} alt="instagram logo" />
                    <img src={linkedin} alt="linkedin logo" />
                    <img src={youtube} alt="youtube logo" />
                    <img src={pinterest} alt="pinterest logo" />
                </div>
                <div className="select-lang">
                   <div className="select-lang2">
                        <div>
                            <select name="language" id="language">
                                <option value="English">English</option>
                                <option value="Espanol">Espanol</option>
                                <option value="Francais">Francais</option>
                                <option value="Portugues">Portugues</option>
                                <option value="Deutsch">Deutsch</option>
                                <option value="Italiano">Italiano</option>
                            </select>
                        </div>
                   </div>
                    <p>©2001-2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. Apple and the Apple logo are trademarks of Apple Inc. Mac App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc. <strong>Privacy</strong> | <strong>Terms</strong> | <strong>Cookie Preferences</strong></p>
                </div>
            </div>
        </>
    );
}
 
export default Footer;