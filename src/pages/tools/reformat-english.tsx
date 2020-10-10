import React from 'react';
import { Button } from 'theme-ui';
import ReformatTextarea from "../../components/ReformatTextarea";

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
      <>
        <ReformatTextarea value={this.state.text} onTextChange={e => this.handleTextChange(e)} />
        <Button onClick={() => navigator.clipboard?.writeText(this.state.text) && alert('copied')}>Copy</Button>
      </>
    );
  }
}

export default ReformatEnglish;