import React from 'react';
import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {

  // const hoverMe = () =>{
  //   const mq = window.matchMedia('(min-width: 1100px)');
  //   if (mq.matches){
  //     document.querySelectorAll('.navChild').forEach(child => {
  //       child.style.display = 'none';
  //     });
  //   }
  // }


  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
