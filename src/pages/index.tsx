/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from 'gatsby-theme-material-ui'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from "gatsby";
import Img from "gatsby-image";


export default ({ data }) => (
  <Layout createdAt={2017}>
    <SEO title="Home" />
    <h1>フォルノの情報サイト</h1>
    <p>こんにちは「フォルノ」です．通称「ふぉるにゃー」です．</p>
    <Img fluid={data.file.childImageSharp.fluid} alt="FORNO's avatar" sx={{maxWidth : 250}}/>
    <h2>Just on the site works</h2>
    <p>Toolsにはこのサイトで利用できる便利機能があります．</p>
    <ul>
      <li><Link to='/tools/reformat-english'>Reformat English</Link></li>
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "icon.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
