import React, { useRef, useState } from 'react'
import { VscSend } from 'react-icons/vsc';
import styled from 'styled-components';
import TypeIt from 'typeit-react';
// import GptLoader from '../Loader/GptLoader';
import { RiImageAddLine } from "react-icons/ri";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { fileToGenerativePart } from '../../Constants/imageHelper';
import Loader from '../Loader/Loader';

const ImageGpt = () => {

  const [Loading,setLoading] = useState()
  const [Query, setQuery] = useState()
  const [GenminiRes,setGeminiRes] = useState()
  const [image,setImage] = useState()
  const [imageInlineData,SetImageInlineData] = useState()
  const [value, setValue] = useState()
  const fileInputRef = useRef(null);


  const handleImageChange = (e)=>{
    const file = e.target.files[0]
    setImage(URL.createObjectURL(file))
    fileToGenerativePart(file).then((image)=>{
      SetImageInlineData(image)
    })
  }

  async function aiImageRun(query,imageInineData) {
    setLoading(1)
    setValue('')
    const MODEL_NAME = "gemini-1.5-flash";
    const API_KEY = process.env.REACT_APP_GPT_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const result = await model.generateContent([
        `${query}`, imageInineData
    ]);
    const response = await result.response
    const text = response.text()
    setLoading(0)
    return text;
  }
  
      return (
        <MainDiv>
    
          {Loading === 1 && 
          <LoadingAni>
            <Loader/>
          </LoadingAni>
          }
    
          <Response>
            <img src={image} alt="Your Image will be shown here . . ." />
          { Loading === 0 &&
              <TypeIt
              options={{
                strings : [`${GenminiRes}`],
                speed:1,
                waitUntilVisible:true,
              }}
              />
          }
          </Response>
          <Requests>
            <textarea name="" id="" onChange={(e)=>setQuery(e.target.value)} rows={3} value={value} placeholder='Enter Your Query....' />
            <div className="submit">
            <input type="file" hidden onChange={(e)=>{handleImageChange(e)}} accept='image/*' capture='camera' ref={fileInputRef}/>
            <button onClick={()=>fileInputRef.current.click()}><RiImageAddLine/></button>
            <button disabled={!imageInlineData && !Query} onClick={()=>aiImageRun(Query, imageInlineData).then((response)=>{
              setGeminiRes(response)
            })}><VscSend/></button>
            </div>
          </Requests>
        </MainDiv>
      )
    }
    
    const LoadingAni = styled.div`
      width: 52vw;
      height: 55vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 2;
    `
    const MainDiv = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      `
    const Response = styled.div`
      width: 60vw;
      height: 70vh;
      background: rgba( 65, 55, 148, 0.4 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 20px );
      -webkit-backdrop-filter: blur( 20px );
      border-radius: 5px;
      border: 1px solid rgba( 255, 255, 255, 0.18 );
      padding: 1rem;
      img{
        width: 10vw;
        border-radius: 15px;
      }
      @media screen and (max-width: 900px) {
        margin: 1rem 0 0 0;
        width: 80vw;
      }
      `
    const Requests = styled.div`
      margin: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .submit{
        position: absolute;
        display: flex;
        right: 28vw;
        gap: 1rem;
        button{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          width: 60px;
          font-size: 2rem;
          border-radius: 50% 50%;
          background: #413794;
          box-shadow:  -5px 5px 10px #1a163b, 1px -1px 5px #1101a0;
          color: #06d306;
            @media screen and (max-width: 900px) {
              width: 40px;
              height: 40px;
            }
          }
            @media screen and (max-width: 900px) {
              right: 8vw;
            }
      }
      textarea{
        color: white;
        font-size: 1rem;
        width: 45rem;
        overflow-wrap: break-word;
        background: rgba( 65, 55, 148, 0.4 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 20px );
      -webkit-backdrop-filter: blur( 20px );
      border-radius: 5px;
      border: 1px solid rgba( 255, 255, 255, 0.18 );
      padding: 1rem;
      @media screen and (max-width: 900px) {
          width: 79vw;
          overflow-y: scroll;
        }
      }
    `

export default ImageGpt