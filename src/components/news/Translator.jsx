import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {GoogleGenerativeAI, HarmCategory,HarmBlockThreshold} from "@google/generative-ai";
import Loader from '../Loader/Loader';

  const MODEL_NAME = "gemini-pro";
  const API_KEY = 'AIzaSyCnNJ4Lk3zpPtpuvaXxX2xIPRA5SI6FD1o';
  

const Translator = () => {

    const [result,Setresult] = useState();
    const [Loading,SetLoading] = useState();

  const getRes = async(texts,Lang) =>{

        SetLoading(0);
        Setresult(null);

          const genAI = new GoogleGenerativeAI(API_KEY);
          const model = genAI.getGenerativeModel({ model: MODEL_NAME });
          
          const generationConfig = {
              temperature: 0.6,
              topK: 1,
              topP: 1,
              maxOutputTokens: 148,
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
    {text: texts+'translate the given sentence in '+Lang},
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
    var Lang = document.getElementById("lang").value;
    getRes(texts,Lang);
}

    console.log(result);
    console.log();

    return (
        <Container>
        <GPTtext>
            <div className="heading">Acody Translator</div>
            <div className="GPT">
            {Loading == 0 && 
                    <GIF>
                    <Loader/>
                    </GIF>
                    }
                    {result}
                </div>
        </GPTtext>
        <GptInput>
            <div className="input">
                <textarea placeholder='Enter the Sentence' name="" id="text" rows="6"/>
                <input placeholder='Enter the Language' className='language' type='text' name="" id="lang" rows="6" />
                <input type="submit" value="submit" onClick={()=>GptCall()} />
            </div>
        </GptInput>
    </Container>
  )
}

const GIF = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10rem 0 0 0;
`

const GptInput = styled.div`
        margin: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .input{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        textarea{
        padding: 1rem;
        background-color: #f9630c20;
        border: none;
        backdrop-filter: blur(10px);
        border-radius: 15px;
        width: 35vw;
        }
        input{
            margin: 0rem 0 0rem 2rem;
            padding: .5rem 1.5rem;
            border-radius: 40px;
            background: linear-gradient(45deg, #bc4f34, #9e432c);
            box-shadow:  2px -2px 5px #712f1f, -2px 2px 5px #ef6543;
        }
        .language{
            margin: 0rem 0 0rem 2rem;
            padding: .5rem;
            border-radius: 40px;
            background: linear-gradient(45deg, #f08f76, #fe8e5e);
            box-shadow:  2px -2px 5px #d99686, -2px 2px 5px #ffccb6;
            border: none;
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

export default Translator