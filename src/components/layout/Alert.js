import React from 'react'

export const Alert = ({ alert }) => {
    return (
        alert != null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fa fa-info-circle"></i> {alert.message}
            </div>
        )
    )
}

export default Alert