import React from 'react'
import styled from 'styled-components'
import Layout from '../layout/Layout';
import {useNavigate} from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();


    return (
        <Layout>
            <Main>
            <Component>
       
            </Component>
            </Main>
        </Layout>
      )
    }
    
    const Main = styled.div`
    width: 90%;
    left: 1rem;
    overflow: hidden;
    `
    
    const Component = styled.div`

display: flex;
align-items: center;

.username{
    margin: 1rem;
    .email{
        margin: 1rem 0 0 0;
    }
}

button{
    background-color: #463631;
    color: white;
}

img{
    border-radius: 50%;
    border: 2px solid black;
    display: flex;
    align-items: center;
}

        padding: 1rem;
        margin: 1rem 0 1rem 2rem;
        width: 90%;
        height: 92vh;
        border-radius: 37px;
        background: #fec6b8;
        box-shadow:  -2px -2px 5px #c7c7c7,2px 2px 5px #f9f9f9;
        display: flex;
        justify-content: center;
    `

export default User
