import React from 'react'

import { auth } from './base'
import { githubProvider } from './base'
import './Login.css'

const Login = () => {
    const authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }

    return(
        <button className="Login" onClick={() => authenticate(githubProvider)}>
            Sign in with Github
        </button>
    )
}

export default Login