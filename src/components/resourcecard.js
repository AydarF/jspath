import React from 'react'
import styled from 'styled-components'

const ResourceCardTitle = styled.h4`
    font-size: 20px;
    height: 50px;
    font-family: sans-serif;
    color: white;
    text-align: left;
    border-bottom: 2px solid royalblue;
`
const ResourceCardBody = styled.div`
    font-size: 14px; 
    font-weight: 500; 
    border-bottom: 1px solid #c3c1c1;

    &:last-child {
        border-bottom: none;
    }

    a {
        color: black;
    }
    a:visited {
        color: black;
    }
`
const ResourceCardParagraph = styled.p`
    display: grid; 
    grid-template-columns: 1fr 1fr;
`
const ResourceCardName = styled.span`
    justify-self: start;
    color: white;
`
const ResourceCardPrice = styled.span`
    justify-self: end;
    color: white;
`

const ResourceCard = ({title, source}) => {
    return (
        <div>
            <ResourceCardTitle>{title}</ResourceCardTitle>
            {source.map(item => (
                <ResourceCardBody key={item.name}>
                    <a rel="noopener noreferrer" href={item.link} target="_blank">
                        <ResourceCardParagraph>
                            <ResourceCardName>{item.name}</ResourceCardName>
                            <ResourceCardPrice>{item.price}</ResourceCardPrice>
                        </ResourceCardParagraph>
                    </a>
                </ResourceCardBody>
            ))}
        </div>
    )
}

export default ResourceCard