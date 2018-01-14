import React from 'react'
import Loader from '../components/Loader'
import Success from './Success';
import Error from './Error';
import '../assets/scss/ApiStatus.scss'

const ApiStatus = ({ status, serviceMessage }) => {
    const getStatus = () => {
        const messaging = {
            'PENDING': <Loader />,
            'FULFILLED': <Success successMessage={ serviceMessage } />,
            'REJECTED': <Error error={ serviceMessage }/>
        }
        return messaging[status] ? messaging[status] : null;
    }

    return (
        <div className="status">
            API-Status: { status }
            <hr />
            { getStatus() }
        </div>
    )
}

export default ApiStatus;