import React, { FC } from "react";
import { Textarea } from "theme-ui";

type ReformatTextareaProps = {
  value: string;
  onTextChange: (text: string) => void;
}

const ReformatTextarea: FC<ReformatTextareaProps> = props => {
  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const formatedText: string = e.target.value
      .replace(/\n/g, " ")
      .replace(/\. {2,}/g, ". \n")
      .replace(/\. ?/g, ".\n");
    props.onTextChange(formatedText);
  }

  return <Textarea value={props.value} onChange={onTextChange} rows={Array.from(props.value).filter(e => e === '\n').length + 2}/>;
}

export default ReformatTextarea;