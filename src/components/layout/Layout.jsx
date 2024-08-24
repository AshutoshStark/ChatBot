import React from 'react'
import styled from 'styled-components'

const Layout = ({children}) => {
  return (
    <div>
      <Component>  
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
