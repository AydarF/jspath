import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/section";
import Wave from "../components/wave";
import staticdata from "../../staticdata.json";
import Cell from "../components/cell";
import styled from 'styled-components';

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: black;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Develop <br />and build <br />the future with JavaScript</h1>
        <p className="HeroParagraph">The world of new technologies awaits you</p>
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div> */}
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
        <img src={require('../images/javascript.png')} width="50" alt="" />
          <img src={require('../images/logo-react.png')} width="50" alt="" />
          <img src={require('../images/angular.png')} width="50" alt="" />
          <img src={require('../images/vue.png')} width="50" alt="" />
          <img src={require('../images/gatsby-icon.png')} width="40" alt="" />
        </div>
        <Wave />
      </div>
      <div className="Cards">
        <h2>11 courses, more coming</h2>
        <div className="CardGroup">
          <Card 
            title="React for Designers"
            text="12 sections"
            image={require('../images/wallpaper.jpg')} />
          <Card 
            title="Design Systems"
            text="10 sections"
            image={require('../images/wallpaper2.jpg')} />
          <Card 
            title="Sound Design"
            text="5 sections"
            image={require('../images/wallpaper3.jpg')} />
          <Card 
            title="ARKit 2"
            text="10 sections"
            image={require('../images/wallpaper4.jpg')} />
        </div>
      </div>
      <Section 
        image={require('../images/wallpaper2.jpg')} 
        logo={require('../images/logo-react.png')}
        title="JavaScript for Creators"
        text="Lorem ipsum. Learn how to build a modern site using React and the most efficient libraries to get your site/product online.
        Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify.

        Oh. You need a little dummy text for your mockup? How quaint.
        
        I bet you’re still using Bootstrap too…" 
        />
        <SectionCaption>15 Sections - 9hours</SectionCaption>
        <SectionCellGroup>
          {staticdata.cells.map(cell => (
            <Cell key={cell.id}
                  title={cell.title}
                  image={cell.image}
            />
          ))}
        </SectionCellGroup>
    </div>
  </Layout>
)

export default IndexPage
