import { useEffect, useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './Users'
import Contact from '../components/Contact'
function App() {
 return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <button onClick={()=>{showMe(3)}}>Clicke Me</button> */}
      <h2>Use State</h2>
      <Counter ></Counter>
      {/* {
        // actors.map(actor=> <Users name={actor}></Users>)
        users.map(user=><Users name={user.name} email={user.email}></Users>)

      } */}

      {/* <h3>User: {test.length}</h3> */}
      <h2>Use State and Use Effect</h2>
      <Users></Users>
      <h2>Contact from Folder</h2>
      <Contact></Contact>
      



      
      
     
    </>
  )
}

export default App
