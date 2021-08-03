import React from 'react';


export default class Signup extends React.Component {
    render(){

        const handleSubmit = (e) => {
            e.preventDefault()
        }

        return (
            <div id="signup-form">
              <h1>Signup</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <input type="text" name="name" placeholder="Name" onChange={}/>
                </div>
                <div>
                  <input type="text" name="email" placeholder="Email" onChange={}/>
                </div>
                <div>
                  <input type="password" name="password" placeholder="Password" onChange={} />
                </div><br></br>
                <input type="submit" value="Signup" />
              </form>
            </div>
        )
    }

}