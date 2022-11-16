import React from "react";
import globe from "./Icons/globe.svg";
import search from "./Icons/magnifying-glass-solid.svg";
import angle from "./Icons/angle-right.svg";
import arrow from "./Icons/Arrow2.svg";
import arrowb from "./Icons/Arrowback.svg";
import phone from "./Icons/phone-solid.svg";
import "./Style/Header.css";
import NavChild1 from "./NavChild1";
import NavChild2 from "./NavChild2";
import NavChild3 from "./NavChild3";
import { useState } from "react";


const Navigation = (props) => {


    const [backBtn, setBackBtn] = useState("back_Btn");
    const [open, setOpen] = useState("Child1");
    const [open1, setOpen1] = useState("Child2");
    const [open2, setOpen2] = useState("Child3");

    //For mobile screens
    const openNav = () => {
        const mq = window.matchMedia('(max-width: 1099px)');
        if (mq.matches){
            setBackBtn("back_Btn back_Btnn");
            setOpen("Child1 navChild_ts");
            document.querySelector('.Child2').style.display = 'none';
            document.querySelector('.Child3').style.display = 'none';
            document.querySelector('.nav-disp-list').style.display='none';
        }
    }
    
    const openNav1 = () => {
        const mq = window.matchMedia('(max-width: 1099px)');
        if (mq.matches){
            setBackBtn("back_Btn back_Btnn");
            setOpen1("Child2 navChild_ts");
            document.querySelector('.Child1').style.display = 'none';
            document.querySelector('.Child3').style.display = 'none';
            document.querySelector('.nav-disp-list').style.display='none';
        }
    }
    
    const openNav2 = () => {
        const mq = window.matchMedia('(max-width: 1099px)');
        if (mq.matches){
            setBackBtn("back_Btn back_Btnn");
            setOpen2("Child3 navChild_ts");
            document.querySelector('.Child1').style.display = 'none';
            document.querySelector('.Child2').style.display = 'none';
            document.querySelector('.nav-disp-list').style.display='none';
        }
    }

    const reverseClick = () =>{

        const mq = window.matchMedia('(max-width: 1099px)');
        if (mq.matches) {

            if (open == "Child1 navChild_ts") {
                setOpen("Child1");
                document.querySelector('.Child2').style.display = 'block';
                document.querySelector('.Child3').style.display = 'block';
            }
            if (open1 == "Child2 navChild_ts") {
                setOpen1("Child2");
                document.querySelector('.Child1').style.display = 'block';
                document.querySelector('.Child3').style.display = 'block';
            }
            if (open2 == "Child3 navChild_ts") {
                setOpen2("Child3");
                document.querySelector('.Child1').style.display = 'block';
                document.querySelector('.Child2').style.display = 'block';
            }
           
            document.querySelector('.nav-disp-list').style.display='block';
            setBackBtn("back_Btn");

        }
    }

    //For desktop screens
    const hoverMe = () =>{
        const mq = window.matchMedia('(min-width: 1100px)');
        if (mq.matches){
            setOpen("Child1 navChild_ts")
            setOpen1("Child2 navChild_ts")
            setOpen2("Child3 navChild_ts")
            document.querySelector('.Child1').style.display = 'block';
            document.querySelector('.Child2').style.display = 'none';
            document.querySelector('.Child3').style.display = 'none';
            document.body.classList.add('active');
        }
    }

    const hoverMe1 = () =>{
        const mq = window.matchMedia('(min-width: 1100px)');
        if (mq.matches){
            setOpen1("Child2 navChild_ts")
            setOpen("Child1 navChild_ts")
            setOpen2("Child3 navChild_ts")
            document.querySelector('.Child2').style.display = 'block';
            document.querySelector('.Child1').style.display = 'none';
            document.querySelector('.Child3').style.display = 'none';
            document.body.classList.add('active');
        }
    }

    const hoverMe2 = () =>{
        const mq = window.matchMedia('(min-width: 1100px)');
        if (mq.matches){
            setOpen2("Child3 navChild_ts")
            setOpen("Child1 navChild_ts")
            setOpen1("Child2 navChild_ts")
            document.querySelector('.Child3').style.display = 'block';
            document.querySelector('.Child1').style.display = 'none';
            document.querySelector('.Child2').style.display = 'none';
            document.body.classList.add('active');
        }
    }

    const hoverMe3 = () =>{
        const mq = window.matchMedia('(min-width: 1100px)');
        if (mq.matches){

            if (setOpen || setOpen1 || setOpen2 === "navChild_ts") {
                setOpen("Child1")
                setOpen1("Child2")
                setOpen2("Child3")
                document.body.classList.remove('active');
        
            } else {
                setOpen("Child1 navChild_ts")
                setOpen1("Child2 navChild_ts")
                setOpen2("Child3 navChild_ts")
                document.body.classList.add('active');
            }
        }
    }
    
    

    return ( 
        <div>
            <div className="search">
                <h4 className={backBtn} onClick={reverseClick}><img src={arrowb} alt="arrow icon" /> <span>Main Menu</span></h4>
                <div>
                    <img src={globe} alt="an icon" />
                    <img src={search} alt="a search icon" />
                </div>
            </div>
            <div className="nav-disp-list">
                <div className="index">
                    <div className="nav-list">
                        <div onClick={openNav} onMouseEnter={ () => {hoverMe(); props.handlePack()}}  className="nav-item item-n1">
                            <p>Products</p>
                            <img src={angle} alt="a navigation icon" />
                        </div>
                        <div onClick={openNav1} onMouseEnter={ () => {hoverMe1(); props.handlePack()}}  className="nav-item item-n2">
                            <p>Resources</p>
                            <img src={angle} alt="a navigation icon" />
                        </div>
                        <div onClick={openNav2} onMouseEnter={ () => {hoverMe2(); props.handlePack()}}   className="nav-item item-n3">
                            <p>Inspiration</p>
                            <img src={angle} alt="a navigation icon" />
                        </div>
                        <div className="nav-item" onMouseEnter={ () => {
                            hoverMe3(); 
                            const mq = window.matchMedia('(min-width: 1100px)');
                            if (mq.matches){
                                props.handleOpac()
                            }}} >
                            <p>Pricing</p>
                        </div>
                    </div>
                    <div className="sales">
                        <p>Talk to Sales</p>
                        <img src={phone} alt="a phone icon" />
                    </div>
                    <div className="update">
                        <p>Product Update</p>
                        <p>Get the latest on new features, product improvements, and other announcements.</p>
                        <p>See what's new <img src={arrow} alt="an arrow link" /></p>
                    </div>
                </div>
            </div>
            

            <div className={open}>
                <NavChild1 />
            </div>
            <div className={open1}>
                <NavChild2 />
            </div>
            <div  className={open2}>
                <NavChild3 />
            </div>
           
            <div className="log-sign">
                <p>Log in</p>
                <p>Sign Up</p>
            </div>
        </div>
     );
}
 
export default Navigation;