import React from 'react'
import Button from '@material-ui/core/Button'
import { logoutUser } from '../actions/index'

export default function Logout() {
    return (
        <div>
            <Button type="submit" value="Logout" logoutUser={logoutUser}>Logout</Button>
        </div>
    )
}
