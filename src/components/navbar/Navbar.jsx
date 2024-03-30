import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useStateContext } from '../../GlobalContext/ContextProvider'
import Home from '../../pages/Home'
import { useState } from 'react'

const Navbar = () => {
    
    const  {currentUser} = useStateContext();
    const [index, Setindex] = useState();

  return (
    <Contaner>
        <NavBar>
            <nav>
                <Link to={'/user'} onClick={()=>Setindex(0)} className="user">
                    <img src={currentUser.photoURL} alt="cant get img" />
                    <p>
                    {currentUser.displayName}
                    </p>
                </Link>
                <Link to={'/GPT'} onClick={()=>Setindex(1)}>
                    Text GPT
                </Link>
                <Link to={'/Translate'} onClick={()=>Setindex(2)}>
                    Translator
                </Link>
                <Link to={'/img'} onClick={()=>Setindex(3)}>
                    Image GPT
                </Link>
            </nav>
        </NavBar>
    </Contaner>
  )
}

const Contaner = styled.div`
    width: 22%;
`
const NavBar = styled.div`
    height: 95vh;
    margin: 1rem;
    border-radius: 50px;
    background: #fec6b8;
    box-shadow:  -29px -29px 57px #c7c7c7,29px 29px 57px #f9f9f9;
    padding: 1rem;

    .user{
        width: 15vw;
        margin:1rem 0 3rem 0;
        padding: 1rem;
        color: #ecf0f1;
        font-size: 11px;
        background: #463631;
        box-shadow:  2px 2px 6px #3c2e2a,-2px -2px 3px #513e38;
        border-radius: 5px;
        padding: 10px;
        display: flex;
    }
    
    .user p{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 0 0.3rem;
    }
    .user img{
        width: 5vw;
        border-radius: 50%;
    }
    
    nav{
        display: flex;
        flex-direction: column;
        background-color: #fec6b8;
    }

    a{
    text-align: center;
    text-decoration: none;
    margin:1rem;
    padding: 1rem;
    width:15vw;
    display: block;
    color: #ecf0f1;
    font-size: 17px;
    border-radius: 50px;
    background: #463631;
    box-shadow:  2px 2px 6px #3c2e2a,-2px -2px 3px #513e38;
    border-radius: 5px;
    padding: 10px;
    transition: all .1s;
    }

    a:active {
    box-shadow: 0px 2px 0px #d35400;
    position: relative;
    top: 2px;
    }
`


export default Navbar
