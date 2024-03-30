import React, { Component, useEffect, useState } from 'react'
import styled from 'styled-components'
import {saveAs} from 'file-saver'
import Loader from '../Loader/Loader';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Axios } from 'axios';


const Images = () => {

     function handle (e){
        // e.preventDefault();
        
        const files = document.getElementById('file');

        const formData = new FormData();

        for(let i = 0 ; i< 1; i++){
            formData.append("files",files.files[i]);
        }

        console.log(...formData)

        fetch('http://localhost:3008/upload',{
            method: 'POST',
            body:formData,
        })
        .then(res=>res.json())
        .then(data=>console.log(data))


    }

    console.log();
    console.log();

    return (
        <Container>
        <GPTtext>
            <div className="heading">Acody GPT</div>
            <div className="GPT">
                
                    {
                    <GIF>
                    <Loader/>
                    </GIF>
                    }
                    {}
                </div>
        </GPTtext>
        <GptInput>
            <div className="input">
                <form action="" >
                <input type="file" name="file" id="file"  />
                <input type="submit" value="submit" onClick={(e)=>handle()} />
                </form>
            </div>
        </GptInput>
    </Container>
  )
}


const GIF = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10rem 0 0 0;
`

const GptInput = styled.div`
        margin: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        textarea{
        background-color: #f1820b21;
        border: none;
        backdrop-filter: blur(10px);
        border-radius: 15px;
        width: 40vw;
        padding: 1rem;
        }
        input{
            margin: 0rem 0 0rem 2rem;
            padding: .5rem 1.5rem;
            border-radius: 40px;
            background: linear-gradient(45deg, #bc4f34, #9e432c);
            box-shadow:  2px -2px 5px #712f1f, -2px 2px 5px #ef6543;
        }
        .input{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
`


const GPTtext = styled.div`
    width:60vw;
    height: 65vh;
    margin: 0 1rem 0 0;
    border-radius: 50px;
    background: #ffb19e;
    box-shadow:  20px -20px 60px #d99686,-20px 20px 60px #ffccb6;
    .heading{
        width: 60vw;
        height: auto;
        padding: 1rem;
        background-color: #b04a31;
        border-radius: 50px 50px 0 0;
        text-align: center;
        font-size: 25px;
        font-weight: 600;
        color: black;
    }
    .GPT{
        margin: 1rem;
    }
`

const Container = styled.div`
display: block;
`

export default Images
