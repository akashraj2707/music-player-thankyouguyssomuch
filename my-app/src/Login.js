import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'
function Login() {
    return (
        <div className='login'>
          <img src=" https://cdn5.vectorstock.com/i/1000x1000/43/44/spotify-logo-dark-mode-vector-37694344.jpg " alt=""/> 

          <a href={loginUrl}>LOGIN TO SPOTIFY</a> 
            
        </div>
    )
}

export default Login
