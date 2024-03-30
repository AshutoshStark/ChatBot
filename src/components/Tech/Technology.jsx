import React from 'react';
import { styled } from 'styled-components';
import { RiRobot2Line } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { GiCyberEye } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Technology = () => {
  return (
    <div>

        <Head>
        <p>Acody GPT</p>
        </Head>

    <MainDiv>
        <FirstCard>
        <Link to={'/GPT'} className='call'>
        <div class="card">
  <div class="top-section">
    <div class="border"></div>
    <div className="image">
        <img src="/assets/ml.png" alt="" />
    </div>
    <div class="icons">
      <div class="logo">
        <RiRobot2Line />
      </div>
      <div class="social-media">
      </div>
    </div>
  </div>
  <div class="bottom-section">
    <span class="title">Text-GPT</span>
    <div class="row row1">
    </div>
  </div>
</div>
        </Link>
        </FirstCard>
        <SecondCard>
        <Link to={'/Translate'} className='call'>
        <div class="card">
  <div class="top-section">
    <div class="border"></div>
    <div className="image">
        <img src="/assets/web.png" alt="" />
    </div>
    <div class="icons">
      <div class="logo">
        <IoLogoReact/>
      </div>
      <div class="social-media">
      </div>
    </div>
  </div>
  <div class="bottom-section">
    <span class="title">AI Translator</span>
    <div class="row row1">
    </div>
  </div>
</div>
</Link>
        </SecondCard>
    </MainDiv>
</div>
  )
}

const Head = styled.div`
    text-align: center;
    margin: 2rem 0 3rem 0;
    font-size: 5rem;
    color: #976C5B;
`
const FirstCard = styled.div`

`
const SecondCard = styled.div``
const ThirdCard = styled.div``
const MainDiv = styled.div`
  a{
    text-decoration: none;
  }
img{
    width: 50%;
    margin: .5rem 0 0 3.5rem;
}
display: flex;
flex-wrap:wrap;
align-items: center;
margin: 2rem 0 2rem 0;
justify-content: space-around;
    .card {
  width: 230px;
  border-radius: 20px;
  background-color: #463631;
  padding: 5px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.logo {
color:white;
}

.card:hover {
  transform: scale(1.05);
}

.card .top-section {
  height: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, #976C5B 0%, #a37c6e 100%);
  position: relative;
}

.card .top-section .border {
  border-bottom-right-radius: 10px;
  height: 30px;
  width: 130px;
  background: white;
  background: #463631;
  position: relative;
  transform: skew(-40deg);
  box-shadow: -10px -10px 0 0 #463631;
}

.card .top-section .border::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  right: -15px;
  background: rgba(255, 255, 255, 0);
  border-top-left-radius: 10px;
  box-shadow: -5px -5px 0 2px #463631;
}

.card .top-section::before {
  content: "";
  position: absolute;
  top: 30px;
  left: 0;
  background: rgba(255, 255, 255, 0);
  height: 15px;
  width: 15px;
  border-top-left-radius: 15px;
  box-shadow: -5px -5px 0 2px #463631;
}

.card .top-section .icons {
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
}

.card .top-section .icons .logo {
  height: 100%;
  aspect-ratio: 1;
  padding: 7px 0 7px 15px;
}

.card .top-section .icons .logo .top-section {
  height: 100%;
}

.card .top-section .icons .social-media {
  height: 100%;
  padding: 8px 15px;
  display: flex;
  gap: 7px;
}

.card .top-section .icons .social-media .svg {
  height: 100%;
  fill: #463631;
}

.card .top-section .icons .social-media .svg:hover {
  fill: white;
}

.card .bottom-section {
  margin-top: 15px;
  padding: 10px 5px;
}

.card .bottom-section .title {
  display: block;
  font-size: 17px;
  font-weight: bolder;
  color: white;
  text-align: center;
  letter-spacing: 2px;
}

.card .bottom-section .row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.card .bottom-section .row .item {
  flex: 30%;
  text-align: center;
  padding: 5px;
  color: rgba(170, 222, 243, 0.721);
}

.card .bottom-section .row .item .big-text {
  font-size: 12px;
  display: block;
}

.card .bottom-section .row .item .regular-text {
  font-size: 9px;
}

.card .bottom-section .row .item:nth-child(2) {
  border-left: 1px solid rgba(255, 255, 255, 0.126);
  border-right: 1px solid rgba(255, 255, 255, 0.126);
}
`

export default Technology
