/* import React from 'react'
import Button from '@material-ui/core/Button'
import { logoutUser } from '../actions/index'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Logout = (props) => {
    const history = useHistory()
    
    const handleClick = () => {
        props.logoutUser() 
        history.push('/')
        
    }
    return (
        <div className="logout-container">
            <br></br>
            <p>Are you sure you want to logout?</p>
            <Button type="submit" value="Logout" onClick={handleClick}>Logout</Button>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
      logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(null, mapDispatchToProps)(Logout)
 */