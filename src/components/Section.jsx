import React from 'react'

const Section = () => {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}

export const SectionTitle = () => {
    return (
        <div className="section__title">
            {props.children}
        </div>
    )
}

export const SectionBody = () => {
    return (
        <div className="section__body">
            {props.children}
        </div>
    )
}

export default Section
