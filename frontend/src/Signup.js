import React from 'react';


export default class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {value: ''}
    }

    handleSubmit(e){
        e.preventDefault()

    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render(){

        

        return (
            <div id="signup-form">
              <h1>Signup</h1>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <input type="text" name="name" placeholder="Name" onChange={this.handleChange}/>
                </div>
                <div>
                  <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
                </div>
                <div>
                  <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                </div><br></br>
                <input type="submit" value="Signup" />
              </form>
            </div>
        )
    }

}