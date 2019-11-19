import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Image = ({className, children}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "green-canyon.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.placeholderImage.childImageSharp
      return (
        <>
            <BackgroundImage fluid={image.fluid} className={className}>
              <div>
                {children}
              </div>              
            </BackgroundImage>
        </>
      )
    }}
  />
)

const StyledBackgroundSection = styled(Image)`
  /* width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover; */
`
export default StyledBackgroundSection;