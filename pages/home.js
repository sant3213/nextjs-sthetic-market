import Link from "next/link";
// import Layout from '../components/layout'
import Head from "../components/head/head";
import Header from "../components/header/Header";
import COPYS from "../components/copys/copys";
import Pleasures from "../components/pleasures/pleasures";
import MockupLeft from "../components/mockup/mockupLeft";
import MockupRight from "../components/mockup/MockupRight";
import Results from "../components/results/results";
import Slide from "../components/slide/slide";
import Footer from "../components/footer/footer";
import { Row } from "react-bootstrap";
import { secondMockup, firstMockup } from "../utils/constants";
import React, { useState, useEffect } from "react";
import Clock from "../components/clock/clock";
import { getCookie, setCookies } from 'cookies-next';

export default function HomePage() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  let interval;
  
  //const countDownDate = new Date("March 23,2022 ").getTime();
  const startTimer =() =>{
    
    const cookie = getCookie('date');
    let newCountDownDate;
    if(cookie === undefined){
      newCountDownDate = new Date(new Date().getTime()+(5*24*60*60*1000));
      setCookies('date', newCountDownDate);
    } else {
      newCountDownDate =  getCookie('date');
      
    }
    
    const countDownDate = new Date(newCountDownDate).getTime();
    interval = setInterval(()=>{
      // const countDownDate = newCountDownDate;
      const now = new Date().getTime();
      if(!isNaN(countDownDate)){
      const distance = countDownDate - now;
      
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60 ));

      const seconds = Math.floor((distance % (60 * 1000)) / (1000));
      
      if(distance < 0) {
        // Stop timer
        clearInterval(interval.current);
      } else {
        // Update timer
        
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
    }
  } else {
    countDownDate = new Date(new Date().getTime()+(5*24*60*60*1000));
    setCookies('date', newCountDownDate);
  }
  });
  }

  useEffect(()=>{
  
    startTimer();
  }, [])
  return (
    <div>
      <Head />
      <Header />
      <COPYS />
     
        <Clock
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
      <Row className="container-btn"></Row>
      {/* <Link href="https://go.hotmart.com/S66618608K?ap=cbdc">
        <Row className="container-btn">
          <div className="blob">
            <h4 className="center">Quiero tomar el curso</h4>
          </div>
        </Row>
        <div>Este descuento finaliza en:</div>
      </Link> */}
      <Pleasures />
      <hr className="line"></hr>
      <MockupLeft parentToChild={firstMockup} />
      <MockupRight parentToChild={secondMockup} />
      <hr className="line"></hr>
      <Slide />
      <hr className="line"></hr>
      <Results />
      <Footer />
    </div>
  );
}
