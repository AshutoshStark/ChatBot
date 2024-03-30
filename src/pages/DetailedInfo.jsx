import React from 'react'
import Layout from '../components/layout/Layout'
import styled from 'styled-components'
import Info from '../components/Info/Info'

const DetailedInfo = () => {
    return (
        <Layout>
            <Main>
            <Component>
              <Info/>
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

export default DetailedInfo
