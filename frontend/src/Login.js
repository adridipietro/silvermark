import React from 'react'

export default class Login extends React.Component {
    
    render() {
        const handleSubmit = (e) => {
            e.preventDefault()

        }

        return (
            <div id="login-form">
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <input type="text" name="email" placeholder="Email" onChange={} />
                </div>
                <div>
                  <input type="password" name="password" placeholder="Password" onChange={}/>
                </div><br></br>
                <input type="submit" value="Login" />
              </form>
            </div>
        )
    }
} 