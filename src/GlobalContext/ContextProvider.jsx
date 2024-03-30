import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../Firebase/firebase';


export const StateContext = createContext({});

export const ContextProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState({});

    useEffect(() => {
      const unsub = onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user);
      })
    
      return () => {
        unsub();
      }
    }, [])
    

  return (
    <StateContext.Provider value={{
        setCurrentUser,
        currentUser,
    }}>
        {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
