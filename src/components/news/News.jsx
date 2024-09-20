import React, { useState } from 'react'
import styled from 'styled-components'
import {GoogleGenerativeAI, HarmCategory,HarmBlockThreshold} from "@google/generative-ai";
import Loader from '../Loader/Loader';
import TypeIt from 'typeit-react';
import { MainDiv, Requests, Response } from './Images';

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
    {text: texts+'explain this in story format in easy language mode'},
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
        <MainDiv>
        <Response>
            <div className="heading">NS GPT</div>
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
        </Response>
        <Requests>
                <textarea name="" id="text" rows="2" cols={100} placeholder="Enter your Query...."/>
            <div className="submit">
                <button onClick={()=>GptCall()} >{`>`}</button>
            </div>
        </Requests>
    </MainDiv>
  )
}

const GIF = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .5rem 0 0 0;
    
`






export default News
