import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (
  <Layout createdAt={2017}>
    <SEO title="Home" />
    <h1>The FORNO's Portfolio</h1>
    <p>こんにちは「フォルノ」です．通称「ふぉるにゃー」です．</p>
    <h2>Just on the site works</h2>
    <p>Toolsにはこのサイトで利用できる便利機能があります．</p>
    <ul>
      <li><Link to='/tools/reformat-english'>Reformat English</Link></li>
    </ul>
  </Layout>
)