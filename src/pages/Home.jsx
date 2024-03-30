import React from 'react'
import styled from 'styled-components'
import News from '../components/news/News'


const Home = () => {
  
  return (
        <Main>
        <Component>
          <News/>
        </Component>
        </Main>
  )
}

const Main = styled.div`
width: 100vw;
height: 100vh;
left: 1rem;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`

const Component = styled.div`
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

export default Home
