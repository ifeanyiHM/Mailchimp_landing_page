import React from "react";
import './Style/Main.css';
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const Main = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    const handleClick = () => {
        document.querySelectorAll('.span-tg').forEach((spa) => {
            spa.style.transform = 'rotate(270deg)';
        });
        document.getElementById('tg').style.transform = 'rotate(90deg)';
        
        document.querySelectorAll('.no-chd').forEach((child) => {
            child.style.display= 'none';
        })
        document.getElementById('img-ct1').style.display = 'block';
    }
    const handleClick1 = () => {
        document.querySelectorAll('.span-tg').forEach((spa) => {
            spa.style.transform = 'rotate(270deg)';
        });
        document.getElementById('tg1').style.transform = 'rotate(90deg)';

        document.querySelectorAll('.no-chd').forEach((child) => {
            child.style.display= 'none';
        });
        document.getElementById('img-ct2').style.display = 'block';
    }
    const handleClick2 = () => {
        document.querySelectorAll('.span-tg').forEach((spa) => {
            spa.style.transform = 'rotate(270deg)';
        });
        document.getElementById('tg2').style.transform = 'rotate(90deg)';

        document.querySelectorAll('.no-chd').forEach((child) => {
            child.style.display= 'none';
        });
        document.getElementById('img-ct3').style.display = 'block';
    }
    const handleClick3 = () => {
        document.querySelectorAll('.span-tg').forEach((spa) => {
            spa.style.transform = 'rotate(270deg)';
        });
        document.getElementById('tg3').style.transform = 'rotate(90deg)';

        document.querySelectorAll('.no-chd').forEach((child) => {
            child.style.display= 'none';
        });
        document.getElementById('img-ct4').style.display = 'block';
    }
    const handleClick4 = () => {
        document.querySelectorAll('.span-tg').forEach((spa) => {
            spa.style.transform = 'rotate(270deg)';
        });
        document.getElementById('tg4').style.transform = 'rotate(90deg)';

        document.querySelectorAll('.no-chd').forEach((child) => {
            child.style.display= 'none';
        });
        document.getElementById('img-ct5').style.display = 'block';
    }

    return ( 
        <>
            <div className="Main">
                <div className="mt-1">
                    <h1>Why Mailchimp?</h1>
                    <p>We're built for growing business. Put our marketing and sales tools behind your idea, dream, brand or business and we'll help you share it with the world.</p>
                </div>
                <div className="main-item">
                    <div>
                        <img src="https://eep.io/images/yzco4xsimv0y/1zWDKFXdQBZGeColFCtHgf/aa379dc2696f582b48f0e399c8a5f871/support1_b_w.png?w=160&fm=webp&q=80" alt="a photo header" />
                        <h3>Award-winning support</h3>
                        <p>Get the help you need, whenever you need it with our 24/7 support</p>
                    </div>
                    <div>
                        <img src="https://eep.io/images/yzco4xsimv0y/2OBlZ0Aun44giirtdr6Fx4/e592f63930574780f28fb792318c5899/thumbsup_b_w.png?w=160&fm=webp&q=80" alt="a photo header" />
                        <h3>250+ app integration</h3>
                        <p>You can connect your tools to Mailchimp and unlock even more features,</p>
                    </div>
                    <div>
                        <img src="https://eep.io/images/yzco4xsimv0y/5ZD6ImzMGdQbhR59NIQB7a/b1dbe083df8adfceab2c75a1d66066e4/trustedpros_b_w.png?w=160&fm=webp&q=80" alt="a photo header" />
                        <h3>A directory of trusted pros</h3>
                        <p>Take your marketing to the next level when you work with a Mailchimp patner.</p>
                    </div>
                </div>
            </div>
            <div className="sub-main">
                <div>
                    <h1>12 million businesses rely on Mainchimp:</h1>
                </div>
                <div className="brand-mt">
                    <img src="https://eep.io/images/yzco4xsimv0y/6EIjMFs2ZyQWsmOOYc4cGe/19d62aa558c8f5d4c4bf222e7e36571b/EastFork.png?w=260&fm=webp&q=70" alt="east fork" />
                    <img src="https://eep.io/images/yzco4xsimv0y/5Z9C7t0HDyyaWu60iWE00A/2e3d2eaa056d0d86c6712c88d239762f/chronicle-books-logo.jpg?w=260&fm=webp&q=70" alt="chronicle book" />
                    <img src="https://eep.io/images/yzco4xsimv0y/vHWiUSlrS8sSQc0cCesGY/429d539471239d6ffcdb8be8767140cb/Fader-Logo-800px-144dpi.jpg?w=260&fm=webp&q=70" alt="fader" />
                    <img src="https://eep.io/images/yzco4xsimv0y/2fZXnWbDK8ugIaCW8Qus0i/1b8f1c4aa80dda874418e4bfa29b60e5/Sweat.png?w=260&fm=webp&q=70" alt="sweat" />
                </div>
                <div className="get-st">
                    <h2>Get Started For Free</h2>
                    <a href="#">Sign Up</a>
                </div>
            </div>
            <div className="sub-main2">
                <div className="mit-1">
                    <h1>Grow with Mailchimp</h1>
                    <p>No matter the size of your business, our tools are here to help you launch, build, and grow.</p>
                </div>
                <div className="mit-2">
                    <div className="mict-0">
                        <img data-aos="fade-up" src="https://eep.io/images/yzco4xsimv0y/2V2qyFsIJhzeCTHxRqOrkj/b9291dc9b867d3c65f855ab53cbd1e90/mtsb_market_your_business_floats__2_.png?w=760&fm=webp&q=80" alt="A sample" />
                        <div>
                            <h3>Market your business</h3>
                            <p>Send the right message on all the right channels. Build emails, social ads, landing pages, postcards, and more from one place.</p>
                        </div>
                    </div>
                    <div className="mict-0">
                        <img data-aos="fade-up" src="https://eep.io/images/yzco4xsimv0y/6nQ4AQKdhqdEtbyt0ATvQI/83fa92b48a2a8881a8736e86f4c4e5fd/mtsb_get_your_business_online_floats__2_.png?w=760&fm=webp&q=80" alt="A sample" />
                        <div>
                            <h3>Get your business online</h3>
                            <p>Build a beautiful website with a custom domain, launch an online store, and allow customers to book appointments directly from your website</p>
                        </div>
                    </div>
                    <div className="mict-0">
                        <img data-aos="fade-up" src="https://eep.io/images/yzco4xsimv0y/2a6oymKQXlg4E71qZA8yjJ/70ff4711985b17539515ba6faa956275/mtsb_cjb_floats__3_.png?w=760&fm=webp&q=80" alt="A sample" />
                        <div>
                            <h3>Automate your marketing</h3>
                            <p>Add a personal touch without the personal effort through automated messages that reach your customers at exactly the right moments.</p>
                        </div>
                    </div>
                </div>
                <div className="mit-3">
                    <div>
                        <img data-aos="fade-up" className="chil-0" src="https://eep.io/images/yzco4xsimv0y/01BcV4OFnqHv593jCOAoe5/14cc7d3f6e3baf94d83f944891f6f9a2/78_Audience-Management_AUI.png?w=160&fm=webp&q=80" alt="A sample" />
                        <h3>Audience management</h3>
                        <p>Put your people at the heart of your marketing with tools that help you get to know your audience and insights that can help drive better results.</p>
                    </div>
                    <div>
                        <img data-aos="fade-up" src="https://eep.io/images/yzco4xsimv0y/1dII7VLoJEoI300uZQxH8O/0c910ac9221428f4dd2a0d14b28cd2d3/UmvWY-_w.png?w=160&fm=webp&q=80" alt="A sample" />
                        <h3>Creative tools</h3>
                        <p>Let your brand shine through with easy-to-use design tools, flexible templates, and AI-powered custom designs.</p>
                    </div>
                    <div>
                        <img data-aos="fade-up" src="https://eep.io/images/yzco4xsimv0y/4Z8MVGFdIiouoNlKo58pZy/e9d6e095e7967a34e6856afe1abba2bb/9_GYBO_AUI.png?w=160&fm=webp&q=80" alt="A sample" />
                        <h3>Insights and analytics</h3>
                        <p>With all your data and insights in one place, you can see what’s working best and get recommendations to help you do more of it.</p>
                    </div>
                </div>
            </div>
            <div className="Section">
                <ul className="Section-ul">
                    <h1>How can Mailchimp help me?</h1>

                    <li>
                        <label for="Retail"><span className="span-tg" id="tg">&#10094;</span> <span>E‑Commerce and Retail</span></label>
                        <input onClick={handleClick} type="radio" name="accordion" id="Retail" defaultChecked="true" />
                        <div className="cda-ed">
                            <img src="https://eep.io/images/yzco4xsimv0y/UuMZ9QAHR1RmVOWHnC7Fd/a3f438eaa8a2b3973e7df092959ec1cf/Step1-Ecommerce.png?w=760&fm=webp&q=80" alt="a store" />
                            <p>Drive traffic and boost sales with a marketing platform that seamlessly integrates with your store.</p>
                        </div>
                    </li>
                    <li>
                        <label for="Mobile"><span className="span-tg" id="tg1">&#10094;</span> <span>Mobile and Web Apps</span></label>
                        <input onClick={handleClick1} type="radio" name="accordion" id="Mobile" />
                        <div className="cda-ed">
                            <img src="https://eep.io/images/yzco4xsimv0y/6KOunlxMguHERt5LxWw53N/4754944c47ee8dbd638d0a855cb8c680/Step2-Mobile-and-Web-Apps.png?w=760&fm=webp&q=80" alt="learning" />
                            <p>Reach new customers, send behavior‑based campaigns, and increase engagement with your app.</p>
                        </div>
                    </li>
                    <li>
                        <label for="Startups"><span className="span-tg" id="tg2">&#10094;</span> <span>Startups</span></label>
                        <input onClick={handleClick2} type="radio" name="accordion" id="Startups" />
                        <div className="cda-ed">
                            <img src="https://eep.io/images/yzco4xsimv0y/7tXbwZRrTL9NBatAP4p9Wt/31d2b492f23cbc13b939f1be4d023324/Step3-Startups.png?w=760&fm=webp&q=80" alt="pop" />
                            <p>Find product-market fit, learn from user feedback, and launch your first marketing campaigns.</p>
                        </div>
                    </li>
                    <li>
                        <label for="Agencies"><span className="span-tg" id="tg3">&#10094;</span> <span>Agencies and Freelancers</span></label>
                        <input onClick={handleClick3} type="radio" name="accordion" id="Agencies" />
                        <div className="cda-ed">
                            <img src="https://eep.io/images/yzco4xsimv0y/1T2VsqVaHXmMJSG71Q7l5O/ec170d656817c5fc73ece0da50be50d6/Step4-Agencies-and-Freelancers.png?w=760&fm=webp&q=80" alt="a father and daughter" />
                            <p>Get perks and tools for managing clients when you join our free community, Mailchimp & Co.</p>
                        </div>
                    </li>
                    <li>
                        <label for="Developers"><span className="span-tg" id="tg4">&#10094;</span> <span>Developers</span></label>
                        <input onClick={handleClick4} type="radio" name="accordion" id="Developers" />
                        <div className="cda-ed">
                            <img src="https://eep.io/images/yzco4xsimv0y/2LAOStlDXOaDelhV7oV6My/73887ac3afb2f6541c5cbb4f472f0c1d/Step5-Developers.png?w=760&fm=webp&q=80" alt="coding" />
                            <p>Integrate marketing data, send transactional emails, and build integrations using our APIs and documentation.</p>
                        </div>
                    </li>
                </ul>

                <div  className="no-sht">
                    <img data-aos="fade-out" id="img-ct1" className="no-chd" src="https://eep.io/images/yzco4xsimv0y/UuMZ9QAHR1RmVOWHnC7Fd/a3f438eaa8a2b3973e7df092959ec1cf/Step1-Ecommerce.png?w=760&fm=webp&q=80" alt="a store" />
                    <img data-aos="fade-out" id="img-ct2" className="no-chd" src="https://eep.io/images/yzco4xsimv0y/6KOunlxMguHERt5LxWw53N/4754944c47ee8dbd638d0a855cb8c680/Step2-Mobile-and-Web-Apps.png?w=760&fm=webp&q=80" alt="learning" />
                    <img data-aos="fade-out" id="img-ct3" className="no-chd" src="https://eep.io/images/yzco4xsimv0y/7tXbwZRrTL9NBatAP4p9Wt/31d2b492f23cbc13b939f1be4d023324/Step3-Startups.png?w=760&fm=webp&q=80" alt="pop" />
                    <img data-aos="fade-out" id="img-ct4" className="no-chd" src="https://eep.io/images/yzco4xsimv0y/1T2VsqVaHXmMJSG71Q7l5O/ec170d656817c5fc73ece0da50be50d6/Step4-Agencies-and-Freelancers.png?w=760&fm=webp&q=80" alt="a father and daughter" />
                    <img data-aos="fade-out" id="img-ct5" className="no-chd" src="https://eep.io/images/yzco4xsimv0y/2LAOStlDXOaDelhV7oV6My/73887ac3afb2f6541c5cbb4f472f0c1d/Step5-Developers.png?w=760&fm=webp&q=80" alt="coding" />
                </div>
            </div>
            <div className="sub-section">
                <h1>Let's do this</h1>
                <a data-aos="fade-up" href="#">Sign Up</a>
            </div>
        </>
    );
}
 
export default Main;