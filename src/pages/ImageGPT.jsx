import React from 'react'
import Layout from '../components/layout/Layout'
import styled from 'styled-components'
import Images from '../components/news/Images'


const ImageGPT = () => {
    return (
        <Layout>
            <Main>
            <Component>
              <Images/>
            </Component>
            </Main>
        </Layout>
      )
    }
    
    const Main = styled.div`
    width: 100%;
    left: 1rem;
    overflow: hidden;
    `
    
    const Component = styled.div`
        width: 100%;
        height: 100vh;
    `

export default ImageGPT
