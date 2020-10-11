import React from 'react';
import { Button } from 'theme-ui';
import ReformatTextarea from '../../components/ReformatTextarea';
import Layout from '../../components/layout'
import SEO from '../../components/seo'

type ReformatEnglishState = {
  text: string;
};

class ReformatEnglish extends React.Component<{}, ReformatEnglishState> {
  constructor(props: {}) {
    super(props);
    this.state = {text: ''};
  }

  handleTextChange(text: string) {
    this.setState({text})
  }

  render() {
    return (
      <Layout title="The Reformat English tool">
        <SEO title="Reformat English" />

        <p>このツールはPDF等から英語をコピーした時の改行が壊れている文章を整形します．
        論文を翻訳機にかける前や上手くコピーできない英語にお使いください．</p>

        <ReformatTextarea value={this.state.text} onTextChange={e => this.handleTextChange(e)} />
        <Button onClick={() => navigator.clipboard?.writeText(this.state.text) && alert('copied')}>Copy</Button>
      </Layout>
    );
  }
}

export default ReformatEnglish;