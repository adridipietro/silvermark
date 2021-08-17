import React from 'react'
import Button from '@material-ui/core/Button'
import { logoutUser } from '../actions/index'

const Logout = () => {
    return (
        <div className="logout-confirmation">
            <h4>Are you sure you want to logout?</h4>
            <Button type="submit" value="Logout" logoutUser={logoutUser}>Logout</Button>
        </div>
    )
}

export default Logout
