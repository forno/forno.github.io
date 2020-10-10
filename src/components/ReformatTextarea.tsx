import React, { FC } from "react";
import { Textarea } from "theme-ui";

type ReformatTextareaProps = {
  value: string;
  onTextChange: (text: string) => void;
}

const ReformatTextarea: FC<ReformatTextareaProps> = props => {
  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text: string = e.target.value
      .replace(/\n/g, " ")
      .replace(/\. {2,}/g, ". \n")
      .replace(/\. ?/g, ".\n");
    props.onTextChange(text);
  }

  return <Textarea value={props.value} onChange={onTextChange} />;
}

export default ReformatTextarea;