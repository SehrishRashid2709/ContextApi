import React from 'react'
import Login from './comp/Login'
import Profile from './comp/profile'
import UserContextProvider from './context/UserContextProvider'



function App() {


  return (
    <UserContextProvider>
      <h1>Hi sehrish Context Api</h1>
      <Login/>
      <Profile />
      </UserContextProvider>
  )
}

export default App
