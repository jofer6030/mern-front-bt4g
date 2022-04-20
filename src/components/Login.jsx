import React from 'react'
import google from '../assets/images/google.png'
import facebook from '../assets/images/facebook.png'
import line from '../assets/images/line.svg'

const Login = () => {
  return (
    <>
      <main className='login'>
        <div className="title">
          <h1>Welcome Back</h1>
          <p className="title__paragraph">Login into your account</p>
        </div>
        <div className="button-social">
          <button className="google">
            <img src={google} alt="logo google" />
            Google
          </button>
          <button className="facebook">
            <img src={facebook} alt="logo facebook" />
            Facebook
          </button>
        </div>
        <div className="separator">
          <img src={line} alt="" />
          <p>Or continue with</p>
          <img src={line} alt="" />
        </div>
        <form className='form'>
          <div className="form__inputs">
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
          </div>
          <div className="form__options">
            <div className="option__check">
              <input type="checkbox"/>
              <p>Remember me</p>
            </div>
            <div className="option__text">
              <p>Recover Password</p>
            </div>
          </div>
          <input type="submit" value="Log in"/>
        </form>
      </main>
    </>
  )
}

export default Login