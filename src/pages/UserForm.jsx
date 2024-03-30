
import React, { useState } from 'react'
import styled from 'styled-components'
import { useStateContext } from '../GlobalContext/ContextProvider';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

const UserForm = () => {

  const  {currentUser} = useStateContext();
  console.log(currentUser.email);
  const [experience, SetExperience] = useState();
  const [goal,Setgoal] = useState();
  const nevigate = useNavigate();
  const usr = currentUser.email;

  console.log(currentUser.email)

  const Upload_UserDetails=(e)=>{
    e?.preventDefault();
    nevigate('/Home');
  }

  return (
    <BackGround>
        <form className="card">
        <div class="content">
            <p class="heading">Personalize Your AI learning
            </p><p class="para">
                Answer the given question to get your own personalized AI learning Platform
            </p>
            <div className="question">
            <p className='Question'>
                Q1. Tell us expertise level ?
            </p><br/>
            <select className='Type' id="Types" onChange={(e)=>SetExperience(e.target.value)}>
                <option value="Basics">Basics</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advance"> Advance</option>
            </select>
            </div>
            <div className="question">
            <p className='Question'>
                Q2. What is your primary goal to be here in easy-peasy ?
            </p><br/>
            <select className='Type' id="Types" onChange={(e)=>Setgoal(e.target.value)}>
                <option value="Hobby">Hobby</option>
                <option value="Professional">Professional</option>
                <option value="Student">Student</option>
            </select>
            </div>
        <button class="btn" onClick={(e)=>Upload_UserDetails(e)}>Submit</button>
        </div>
        </form>
    </BackGround>
  )
}

const BackGround = styled.div`
height: 100vh;
background-color: #fec6b8;
display: flex;
align-items: center;
justify-content: center;

font-size: 1rem;
    color: white;
    margin: 0 0 0 1rem;
    select {
        width: 180px;
        background-color: white;
        border: thin solid blue;
        border-radius: 4px;
        display: inline-block;
        font: inherit;
        line-height: 1.5em;
        padding: 0.5em 3.5em 0.5em 1em;
        margin: 1rem 2rem;      
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image:
        linear-gradient(45deg, transparent 50%, blue 50%),
        linear-gradient(135deg, blue 50%, transparent 50%),
        linear-gradient(to right, skyblue, skyblue);
        background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        100% 0;
        background-size:
        5px 5px,
        5px 5px,
        2.5em 2.5em;
        background-repeat: no-repeat;
    }
    select:focus {
        background-image:
        linear-gradient(45deg, white 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, white 50%),
        linear-gradient(to right, gray, gray);
        background-position:
        calc(100% - 15px) 1em,
        calc(100% - 20px) 1em,
        100% 0;
        background-size:
        5px 5px,
    5px 5px,
    2.5em 2.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
}


.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 32px;
  overflow: hidden;
  border-radius: 10px;
  background: #fc896c;
  border: 2px solid #fd5d5d;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  color: #e8e8e8;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.content .heading {
  font-weight: 700;
  font-size: 32px;
}

.content .para {
  line-height: 1.5;
}

.content .btn {
  color: #e8e8e8;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: #0974f1;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.card:hover {
  box-shadow: 0 0 20px #f8623d;
  border-color: #fec6b8;
}

.content .btn:hover {
  outline: 2px solid #e8e8e8;
  background: transparent;
  color: #e8e8e8;
}

.content .btn:active {
  box-shadow: none;
}

    
`

export default UserForm
