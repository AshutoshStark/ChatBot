import React from 'react'
import styled from 'styled-components'
import Navbar from '../navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <Component>
        <Navbar/>   
        {children}  
      </Component>
    </div>
  )
}

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 0 0 3rem;
`

export default Layout
