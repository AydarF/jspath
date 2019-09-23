import React from 'react';
import styled from 'styled-components';

const FooterGroup = styled.div`
  display: grid;
  padding: 30px 0; 
  grid-gap: 20px;
  background: rgba(0,0,0,0.9);

  @media (max-width: 640px){
    justify-content: center;
  }
`

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #195564;
  max-width: 500px;
  margin: 0 auto;
`

const Button = styled.button`
  justify-self: center;
  padding: 8px 20px;
  background: #195564;
  color: white;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: white;
    color: black;
    box-shadow: 0 10px 20px rgba(0,0,0, 0.15);
    transform: translateY(-3px);
}
`;

const LinkGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  text-align: center;
  width: 500px;
  margin: 10px auto;

  @media (max-width: 640px){
    grid-template-columns: 1fr;
  }
`;
const Copyright = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  color: #457;

  @media (max-width: 640px){
    max-width: 300px;
    text-align: center;
  }
`;


const Footer = ({data, children}) => (
        <FooterGroup>
                <Text>Let's Go!</Text>
                <Button>Tweet</Button>
                <LinkGroup>
                        {data.allContentfulLink.edges.map(edge => (
                                <a href={edge.node.url} key={edge.node.title}>{edge.node.title}</a>
                        ))}
                </LinkGroup>
                <Copyright>{children}</Copyright>
        </FooterGroup>
)

export default Footer;