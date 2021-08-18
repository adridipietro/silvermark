import React from 'react'
import Button from '@material-ui/core/Button'
import { logoutUser } from '../actions/index'
import { connect } from 'react-redux'

const Logout = () => {
    const handleClick = () => {
        logoutUser()
    }
    return (
        <div className="logout-confirmation">
            <h4>Are you sure you want to logout?</h4>
            <Button type="submit" value="Logout" onClick={handleClick}>Logout</Button>
        </div>
    )
}

const mapState = (currentState) => {
    return {
      user: currentState.users.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapState, mapDispatchToProps)(Logout)
