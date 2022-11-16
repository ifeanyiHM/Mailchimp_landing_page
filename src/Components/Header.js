import icon from "./Icons/menu.svg";
import logo from "./Icons/mailchimp.svg";
import React from "react";
import './Style/Header.css';
import Navigation from "./Navigation";
import globe from "./Icons/globe.svg";
import search from "./Icons/magnifying-glass-solid.svg";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])


    const [open, setOpen] = useState("navigation");
    const openNav = () => {
        open == 'navigation'?
        setOpen("navigation navigation_ts") :
        setOpen("navigation");
        document.querySelector('.open_black').style.display = "block";
    };

    const openNav2 = () => {
        if (open == 'navigation navigation_ts') {
            setOpen("navigation");
            document.querySelector('.open_black').style.display = "none";
        }
    };

    if (open == "navigation navigation_ts") {
        document.body.classList.add('active');
        
    } else{
        document.body.classList.remove('active');
    }

    const handlePack = () => {
        document.querySelector('.open_black').style.display = "block";
    }

    const handleOpac = () => {
        document.querySelector('.open_black').style.display = "none";
    }
    
    
    const hoverOver = () => {
        const mq = window.matchMedia('(min-width: 1100px)');
        if (mq.matches) {
            document.body.classList.remove('active');
            document.querySelector('.open_black').style.display = "none";
            
        //    const x = document.querySelector('.Child1');
        //    const y = document.querySelector('.Child2');
        //    const z = document.querySelector('.Child3');
           
        //    if (open === 'navigation') {
        //         x.classList.remove('navChild_ts');
        //         y.classList.remove('navChild_ts');
        //         z.classList.remove('navChild_ts');
        //    } else {
        //         x.classList.add('navChild_ts');
        //         y.classList.add('navChild_ts');
        //         z.classList.add('navChild_ts');
        //    }
        }
    }


    const [color, setColor] = useState(false);
    const scrollColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener('scroll', scrollColor);
    
    return ( 
        <>
            <div className={color? 'Header header-bg' : 'Header'} >
                <div className="Nav-menu">
                    <div className="open_black"  onClick={openNav2} ></div>
                    <img onClick={openNav} src={icon} alt="Nav menu" />
                    <div className={open}>
                        <Navigation handlePack={handlePack} handleOpac={handleOpac} />
                    </div>
                </div>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <div className="height">
                        <p>INTUIT</p>
                        <p>mailchimp</p>
                    </div>
                </div>
                <div className="register">
                    <p className="reg"><span>Sales:</span> <br /> +1 (800) 315-5939</p>
                    <img src={globe} alt="an icon" />
                    <img src={search} alt="a search icon" />
                    <p className="Login">Log In</p>
                    <p className="signup">Sign Up</p>
                </div>
            </div>

            <div className="header-section" >
                <div className="call-text">
                    <h1>Do it all with Mailchimp</h1>
                    <p>With Mailchimp, you get the tools you need to sell your products, reach new customers, and take your business to the next level.</p>
                    <a href="#">Sign Up</a>
                </div>
                <div data-aos="fade-up" className="cart-image">
                    <img src="https://eep.io/images/yzco4xsimv0y/1P5Vc22g3AhhQVDjn4hWS9/e95247e24bdb20a85432ad0fea7250d8/mtsb_homepage_hero_floats_grow_with_mailchimp__1___1_.png?w=760&fm=webp&q=70" alt="" />
                </div>
            </div>
        </>
    );
}
 
export default Header;