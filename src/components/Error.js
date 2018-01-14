import React from 'react'
import '../assets/scss/Error.scss'

const Error = props =>
    <div className="error">
        ERROR Status:
        <br/>
        <div className="error-message">
            { props.error
                ? `${props.error.name}: ${props.error.message}`
                : 'Unknown Error'
            }
        </div>
    </div>





export default Error;