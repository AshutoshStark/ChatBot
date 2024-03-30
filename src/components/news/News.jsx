import React, { useState } from 'react'
import styled from 'styled-components'
import {GoogleGenerativeAI, HarmCategory,HarmBlockThreshold} from "@google/generative-ai";
import Loader from '../Loader/Loader';
import TypeIt from 'typeit-react';

  const MODEL_NAME = "gemini-pro";
  const API_KEY = 'AIzaSyAQkbb60P07XO2gbejN47YxEEgYCQBPjK8';

const News = () => {

    const [result,Setresult] = useState();
    const [Loading,SetLoading] = useState();

  const getRes = async(texts) =>{
        SetLoading(0);
        Setresult(null);

          const genAI = new GoogleGenerativeAI(API_KEY);
          const model = genAI.getGenerativeModel({ model: MODEL_NAME });
          
          const generationConfig = {
              temperature: 0.6,
              topK: 1,
              topP: 1,
              maxOutputTokens: 2048,
            };
            
            const safetySettings = [
      {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];
  
const parts = [
    {text: texts+'in 200 words'},
];
    
const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        safetySettings,
    });
  
    const response = result.response;
    Setresult(response.text());
    SetLoading(1);
}

// useEffect(()=>{
//     getRes();
// },[])

const GptCall=()=>{

    var texts = document.getElementById("text").value;
    getRes(texts);
}

    console.log(result);
    console.log();

    return (
        <Container>
        <GPTtext>
            <div className="heading">Acody GPT</div>
            <div className="GPT">
                
                    {Loading === 0 && 
                    <GIF>
                    <Loader/>
                    </GIF>
                    }
                    {Loading === 1 && 
                    <TypeIt
                    options={{
                        strings: [`${result}`],
                        speed: 1,
                        waitUntilVisible: true,
                    }}
                    />
                    }
                </div>
        </GPTtext>
        <GptInput>
            <div className="input">
                <textarea name="" id="text" rows="6" placeholder="Enter your Query...."/>
                <input type="submit" value="submit" onClick={()=>GptCall()} />
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
        width:60vw;
        height: 15vh;
        padding: 1rem;
        }
        input{
            margin: 0rem 0 0rem 2rem;
            padding: .5rem 1rem;
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
    width:80vw;
    height: 55vh;
    margin: 0 1rem 0 0;
    border-radius: 50px;
    background: #ffb19e;
    box-shadow:  20px -20px 60px #d99686,-20px 20px 60px #ffccb6;
    .heading{
        width: 80vw;
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

export default News
