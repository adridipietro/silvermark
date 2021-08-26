import React from 'react'
import Button from '@material-ui/core/Button'
import { logoutUser } from '../actions/index'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Logout = (props) => {
    const history = useHistory()
    
    const handleClick = () => {
        debugger
        props.logoutUser() 
        history.push('/')
        
    }
    return (
            <Button type="submit" value="Logout" onClick={handleClick}>Logout</Button>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
      logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(null, mapDispatchToProps)(Logout)
