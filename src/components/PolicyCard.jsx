import React from 'react'
import PropTypes from 'prop-types'

const PolicyCard = props => {
    return (    
        <div className="polycy-card">
            <div className="polycy-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="polycy-card__info">
                <div className="polycy-card__info__name">
                    {props.name}
                </div>
                <div className="polycy-card__info__description">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

PolicyCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default PolicyCard
    