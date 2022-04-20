import React from 'react'
import logo from '../assets/images/Logo.svg'

const Header = ({login, setLogin}) => {

  if(!login) return (
    <>
        <header className='header'>
            <div className="logo">
                <img src={logo} alt="" className="logo__img" />
                <p className="logo__name">
                    Logo{' '}
                    <span>Here</span>
                </p>
            </div>
            <div className="options">
                <p className="options__text">have an account?</p>
                <a href="#" className="options__link" onClick={e => setLogin(true)}>Sign in!</a>
            </div>
        </header>
    </>
  )
  return (
    <>
        <header className='header'>
            <div className="logo">
                <img src={logo} alt="" className="logo__img" />
                <p className="logo__name">
                    Logo{' '}
                    <span>Here</span>
                </p>
            </div>
            <div className="options">
                <p className="options__text">Don't have an account?</p>
                <a href="#" className="options__link" onClick={e => setLogin(false)}>Sign up!</a>
            </div>
        </header>
    </>
  )
  
}

export default Header