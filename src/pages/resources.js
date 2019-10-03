import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import resourcesdata from "../../resourcesdata.json";
// import Wave from "../components/wave";

import styled from "styled-components";
import ResourceCard from "../components/resourcecard"

const ResourcesArea = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    align-items: flex-start;
    padding: 150px 40px 0;
    background: black;
    text-align: center;
    
    @media (max-width: 1060px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    } 
`

const ResourcesBody = styled.div`
    border: 1px solid #c3c1c17d;
    border-radius: 10px; 
    padding: 0 25px;

    &:hover {
        border: 1px solid #c3c1c1;
        transition: 0.3s;
        transform: translate(0, -5px);
    }
`

const Resources = () => {
    const data = resourcesdata;
    return (
        <Layout>
          <SEO title="Resources page" />
                <ResourcesArea>
                    {data.cells.map(cell => (                    
                        <ResourcesBody key={cell.id}>
                            <ResourceCard title={cell.title} source={cell.source}/>
                        </ResourcesBody>                         
                    ))
                    }
                </ResourcesArea>
                {/* <Wave />   */} 
        </Layout>    
    )
}

export default Resources

