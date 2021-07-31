import React from 'react';


export default class Signup extends React.Component {
    render(){
        return (
            <div id="form">
              <h1>Signup</h1>
              <form>
                <div>
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div>
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div>
                  <input type="password" name="password" placeholder="Password" />
                </div><br></br>
                <input type="submit" value="Login" />
              </form>
            </div>
        )
    }

}