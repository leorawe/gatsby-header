import React from "react"
import { Link, graphql } from "gatsby"
import styled from '@emotion/styled'

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const HotHeader = styled.h1`
  color: green;
  @media (max-width: 700px) {
    background: palevioletred;
  }
  @media (min-width: 1040px) {
    font-size: 40px;
    color: hotpink;
  }    
  &:hover {
        color: blue;
      }
`

const IndexPage = ({data}) => (
  <Layout
  image={data.coverImage.childImageSharp.fluid}
  >
    <SEO title="Home" />
    <HotHeader>Hi people</HotHeader>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage


export const pagequery = graphql`
query {
  coverImage: file(relativePath: {eq: "back-400.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
