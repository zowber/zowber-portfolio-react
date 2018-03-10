import React from 'react'
import Section from './Section'

const PortfolioDetailBody = (props) => {

    if (props.sections) {
        const sections = props.sections.map((section, index) => {
            return <Section key={index} section={section} />
        })
        return (
            <div className="container-fluid">
                {sections}
            </div>
        )
    } else {
        return null
    }
    
}

export default PortfolioDetailBody