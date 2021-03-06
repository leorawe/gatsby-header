import React from "react"
import { Link} from "gatsby"
import styled from '@emotion/styled'

import Layout from "../components/layout"
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
  <Layout>
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


// export const coverimage = graphql`
// query {
//   coverImage: file(relativePath: {eq: "gelfand-cover-400.jpg"}) {
//     childImageSharp {
//       fluid(maxWidth: 2000) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
// `
