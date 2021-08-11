import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
                  <TextField type="text" name="name" placeholder="Name" onChange={this.handleChange}/>
                </div>
                <div>
                  <TextField type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
                </div>
                <div>
                  <TextField type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                </div><br></br>
                <Button type="submit">Signup</Button>
              </form>
            </div>
        )
    }

}