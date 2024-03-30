import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { useStateContext } from '../GlobalContext/ContextProvider';
const LoginPage = () => {
    const [emailId,setEmailId] = useState("");
    const [password,setPassWord] = useState("");
    const navigate = useNavigate();
    const {currentUser} = useStateContext();

    console.log(currentUser?.email)
    const handleSignIn=async(e)=>{
      e.preventDefault();
      await signInWithEmailAndPassword(auth,emailId,password).then((response)=>{
          navigate("/");
          toast.success(`Welcome!, ${currentUser.displayName}`);
          // This will replace the current route with home router so that user will not come
          // back to the login page again.
      }).catch((response)=>{
          toast.error("Please enter a valid email or password");
      });
    }
  
    const googleSignIn=async(e)=>{
      e.preventDefault();
      const googleAuthProvider = new GoogleAuthProvider();
      await signInWithPopup(auth,googleAuthProvider).then((response)=>{
        navigate('/GPT');
      });
    }
  
    return (
      <div>
        <Container>
            <div className="back">
              <img src={"/assets/young-girl-reading-a-book-while-sitting-on-chair-3d-character-illustration-png.webp"} alt="" />
            <div className="container">
            <LoginForm>
              <div className="heading">Login</div>
              <form action="">
                  <input className="input" type='email' placeholder='Email' onChange={(e)=>setEmailId(e.target.value)} />
                  <input className="input" type="password" placeholder="Password" onChange={(e)=>setPassWord(e.target.value)}/>
                  <Link to="#" className='login'>Forgot Password ?</Link>
                  <Link to="/signup" className='login'>Don't have account ?</Link>
                    <LoginButton type='submit' onClick={(e)=>handleSignIn(e)}>
                    Login
                  </LoginButton>
                </form>
            </LoginForm>
            <OtherSignOption>
                <span className="title">Or Sign in with</span>
                  <div className="social-accounts">
                        <button className="social-button google" onClick={(e)=>googleSignIn(e)}>
                      {''}
                      <FcGoogle/>
                    </button>
                  </div>
            </OtherSignOption>
          </div>
          </div>
        </Container>
      </div>
    )
  }
  
  const OtherSignOption = styled.div`
    .title {
      display: block;
      text-align: center;
      font-size: 10px;
      color: rgb(170, 170, 170);
    }
    .social-accounts {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 5px;
    }
    .social-button {
      background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
      font-size: 20px;
      border: 5px solid white;
      padding: 5px;
      border-radius: 50%;
      width: 45px;
      aspect-ratio: 1;
      display: grid;
      place-content: center;
      box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
      transition: all 0.2s ease-in-out;
      &:hover {
      transform: scale(1.2);
      }
      &:active {
        transform: scale(0.9);
      }
    }
    
  `
  
  
  const LoginButton = styled.button`
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
    color: white;
    padding-block: 15px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: rgba(95, 184, 225, 0.807) 0px 20px 10px -15px;
    border: none;
    transition: all 0.2s ease-in-out;
    &:hover{
      transform: scale(1.03);
      box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
    }
    &:active {
      transform: scale(0.95);
      box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
    }
  `
  
  
  const LoginForm = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    form {
      margin: 2rem 0 0 0;
    }
    .heading {
      top: 1rem;
      font-weight: 900;
      font-size: 30px;
      color: rgb(16, 137, 211);
    }
    input {
      width: 95%;
      background: white;
      border: none;
      padding: 10px 15px;
      border-radius: 20px;
      margin-top: 10px;
      box-shadow: #cff0ff 0px 10px 10px -5px;
      border-inline: 2px solid transparent;
      ::-moz-placeholder {
        color: rgb(170, 170, 170);
      } 
      ::placeholder {
        color: rgb(170, 170, 170);
      }
      &:focus {
        outline: none;
        border-inline: 2px solid #12B1D1;
      }
    }
    .login{
    display: block;
    margin: 1rem ;
    padding: 5px;
    font-size: 13px;
    color: #0099ff;
    text-decoration: none;
    background-color: #fbfdfc;
    border-color: #fbfdfc;
  }

  
  `
  
  
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0rem 0 0 0;
    height: 700px;
    .back{
      display: flex;
      background-color: #f5f4f9;
      border-radius: 20px;
      box-shadow: 4px 14px 14px 14px #97a4ac3e;
      width: 80%;
      height:600px;
    }
    img{
      width: 45%;
      margin: 0 -5rem 0 0rem;
      @media screen and (max-width: 1000px) {
        display: none;
      }
    }
    .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 550px;
    background: #F8F9FD;
    background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
    border-radius: 40px;
    padding: 20px 30px;
    border: 5px solid rgb(255, 255, 255);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
    margin: 1rem 1rem 1rem 20%;
    @media screen and (max-width: 1000px) {
      width: 80%;
      height: 450px;
      margin: 5% 0 0 10%;
    }
    @media screen and (max-width: 900px) {
      width: 80%;
      height: 450px;
      margin: 5% 1rem 0 1rem;
    }
  }
  
  .social-account-container {
    position: absolute;
    margin: 21rem 0 0 0;
  }
  
  
  `
  
  export default LoginPage