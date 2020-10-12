import React from 'react'
import { Link } from 'gatsby-theme-material-ui'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Typography } from '@material-ui/core'

export default () => (
  <Layout createdAt={2017}>
    <SEO title="Home" />
    <h1>フォルノの情報サイト</h1>
    <p>こんにちは「フォルノ」です．通称「ふぉるにゃー」です．</p>
    <h2>Just on the site works</h2>
    <p>Toolsにはこのサイトで利用できる便利機能があります．</p>
    <ul>
      <li><Link to='/tools/reformat-english'>Reformat English</Link></li>
    </ul>
  </Layout>
)