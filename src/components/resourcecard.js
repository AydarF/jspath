import React from 'react'

const ResourceCard = (props,i) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.source}</p>
            
        </div>
    )
}

export default ResourceCard