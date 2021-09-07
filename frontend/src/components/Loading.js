import Loader from 'react-loader-spinner'

const LoadingIndicator = (props) => {

    return (
        <div
            style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <h3>Loading</h3>
            <Loader type="ThreeDots" color="blue" height="100" width="100" />
        </div>
    );  
}

export default LoadingIndicator