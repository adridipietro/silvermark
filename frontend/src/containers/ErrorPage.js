import React from 'react'

const ErrorPage = ({error}) => {
    return (
        <>
            {String(error) || <h3>The page you were looking for doesn't seem to exist!</h3>}
            <img src='https://cdn.staticcrate.com/stock-hd/effects/footagecrate-red-error-icon@2X.png' alt="404 error - page not found"/>
        </>
    )
}

export default ErrorPage
