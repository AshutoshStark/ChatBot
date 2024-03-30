import React from 'react';
import Styles from './hero.css'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Main = () => {
     return (
          <>
               <section className="hero">
                    <p className='heading'>Unlock the Future: Revolutionary AI with Seamless Translation & Next-Generation Capabilities.🤖</p>
                    <Utile>
                         <Link to={'/Login'} className='text'>
                         <svg height="14" width="14" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>  Register now 
                         </Link>
                    </Utile>
               </section>

          </>
     );
};

const Utile = styled.div`

a{
     text-decoration: none;
     margin: 2px 3px;
}

  border: none;
  width: 10em;
  height: 3em;
  border-radius: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #DB7F67;
  cursor: pointer;
  transition: all 450ms ease-in-out;

.sparkle {
  fill: #45413E;
  transition: all 800ms ease;
  margin: 0 0.2rem 0 0 ;
}

.text {
  font-weight: 600;
  color: #45413E;
  font-size: medium;
}

&:hover {
  background: linear-gradient(0deg,#45413E,#A0786A);
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
  inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),
  0px 0px 0px 4px rgba(255, 255, 255, 0.2),
  0px 0px 180px 0px #DB7F67;
  transform: translateY(-2px);
}

&:hover .text {
  color: white;
}

&:hover .sparkle {
  fill: white;
  transform: scale(1.2);
} 
`

export default Main;
