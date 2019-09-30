import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import resourcesdata from "../../resourcesdata.json";

// import styled from "styled-components";``
// import ResourceCard from "../components/resourcecard"

const Resources = () => {
 
    return (
        <Layout>
          <SEO title="Resources page" />
            <div style={{padding: "150px 0 0", textAlign: "center"}}>
                <div style={{maxWidth: "500px", margin: "0 auto"}}>
                    {resourcesdata.cells.map(cell => (
                        <div key={cell.id} style={{border: '1px solid #c3c1c1', borderRadius: '5px', margin: '0 0 25px', padding: '0 25px'}}>
                            <p>{cell.title}</p>
                            {cell.source.map(item => (
                                <div key={item.name} style={{fontSize: '14px', fontWeight: 500, borderBottom: '1px solid #c3c1c1'}}>
                                    <p><a rel="noopener noreferrer" href={item.link} target="_blank">{item.name} </a><span>{item.price}</span></p>
                                </div>
                            ))}
                        </div>    
                    ))
                    }
                </div>
            </div>
            <Link to="/">Go back to the homepage</Link>
        </Layout>    
    )
}

export default Resources

