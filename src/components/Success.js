import React from 'react'

const Success = ({ successMessage }) => {
    return successMessage
        ? <div className="success">{ successMessage }</div>
        : null
}

export default Success;