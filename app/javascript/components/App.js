import React from 'react';
import { CardList } from './CardList';
import { SearchBox } from './SearchBox';
import { Room } from './Room';
import { roomLayout } from '../roomLayout.js';

import { useState, useEffect } from 'react';


const myCarousel = document.getElementById('carouselExampleControls')

const educationWorkContents = [
  {"Simulation Practice: Find Campus Map":"Using GIS data and distance from the seafloor in Mathematica, we created a program to locate the Takatsuki campus of Kansai University."},
  {"Simulation Practice: Analysis of data by prefecture": "Using R, analysis was done on various data such as the number of universities per 100,000 population and the number of traffic fatalities per 100,000 population. Analysis and correlation of different data was done simultaneously to test hypotheses.<br>Latex was used to compile text and graphs."},
  {"Enjoy Computing Practice: Creating a CD jacket using Photoshop":"I learned a lot by starting and using Photoshop. I also learned a lot about useful tools such as the spot correction brush. I hope to continue using Photoshop to create many interesting works in the future."},
  {"Basic Graphics Practice: Creating your own website design using Adobe Illustrator": ""},
  {"Introductory Seminar Thesis":""},
  {"ME310 Oni Ramen Project (Stanford University)": "Helped out a team of 8 consisting of designers and mechanical engineers to create User Interface for a project on autonomous Ramen Delivery system called Oni-Ramen."},
  {"My Next House":"Winner of JPY 300K @ Osaka International Startup Competition"},
  ]


myCarousel.addEventListener('slid.bs.carousel', event => {
  slideIndex = parseInt(myCarousel.getElementsByClassName('active')[0].getAttribute('aria-label').replace("Slide ","")) - 1
  document.getElementById("workEducationTitle").innerHTML = Object.keys(educationWorkContents[slideIndex])[0]
  document.getElementById("workEducationContent").innerHTML = Object.values(educationWorkContents[slideIndex])[0]
})

let tileSize = window.innerWidth > window.innerHeight ? window.innerHeight / 5 : window.innerWidth / 5;


export function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      tileSize = window.innerWidth > window.innerHeight ? window.innerHeight / 5 : window.innerWidth / 5;
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  })

  let hover = 'hover'
  setInterval(()=>{

    growElements = document.getElementsByClassName("grow")

    // console.log(document.getElementsByClassName("grow")[0])
    if (hover === 'hover') {
      Array.prototype.forEach.call(growElements, function(growElement) {
        growElement.style.cssText += '-webkit-transform: scale(1.05);transform: scale(1.05);';
      });


      // growElements.forEach(growElement =>{
      //   console.log(growElement)
      //   growElement.style.cssText += '-webkit-transform: scale(1.05);transform: scale(1.05);';
      // })

      // document.getElementsByClassName("grow")[0].style.cssText += '-webkit-transform: scale(1.05);transform: scale(1.05);';
      // document.getElementsByClassName("grow")[0].classList.remove("mystyle");
      hover = ''
    }
    else {
      Array.prototype.forEach.call(growElements, function(growElement) {
        growElement.style.cssText += '-webkit-transform: scale(1.00);transform: scale(1.00);';
      });
      // growElements.forEach(growElement =>{
      //   growElement.style.cssText += '-webkit-transform: scale(1.00);transform: scale(1.00);';
      // })
      // document.getElementsByClassName("grow")[0].style.cssText += '-webkit-transform: scale(1.00);transform: scale(1.00);';
      hover = 'hover'
    }
    // mouseEventName = (mouseEventName === 'mouseenter' ? 'mouseleave' : 'mouseenter')
    // const mouseoverEvent = new MouseEvent(mouseEventName);
    // document.getElementsByClassName("grow")[0].className = 'hover';/*.dispatchEvent(mouseoverEvent);*/
  },1000)

  return (
    <>
      {/*<h1>RoboFriends</h1>
      <SearchBox />*/}
    <Room roomLayout={roomLayout} tileSize={tileSize} />
    </>
    )
  
}

// const HelloMessage = ({ name }) => <h1>Hello, {name}!</h1>;