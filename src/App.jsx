import { useState } from 'react'
import Aside from './components/Aside'
import Header from './components/Header'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  const [login, setLogin] = useState(true)

  return(
    <div>
        <Header 
          login={login}
          setLogin={setLogin}
        />
        {login ? (<Login />) : (<SignUp />)}
        <Aside 
          //image= {login ? "login" : "signup"}
        />
      </div>
  )
}

export default App
