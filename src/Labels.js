import React from 'react'

const Labels = (props) => {
    const labels = props.labels.map(label => {
        return (
            <li key={label.name} className="labels__label">
                {label.name}
            </li>
        )
    })
    return (
        <ul className="labels list-unstyled">
            {labels}
        </ul>
    )
}

export default Labels