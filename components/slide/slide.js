import React from 'react';
import { Container } from "react-bootstrap";
import Image from 'next/image';
export default function Slide() {
      return (
        <Container>
           <h1 className="title">Testimonios de alumnos</h1>
        <ul className="testimonios">
          <li ><Image alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/testimonios/1.jpg" className='carousel-imgs' width={"250"} height={"150"}></Image></li>
          <li ><Image alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/testimonios/2.jpg" className='carousel-imgs-3'  width={"250"} height={"150"}></Image></li>
          <li ><Image alt="drenaje linfático" src="https://drenaje-linfatico.s3.amazonaws.com/public/assets/testimonios/3.jpg" className='carousel-imgs'  width={"250"} height={"150"}></Image></li>
        </ul>
      </Container>
              
      )
}