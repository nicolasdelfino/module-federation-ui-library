import React from "react";
import "./styles/BoxStyles.css";
import { getValidProps } from "team-ui/Components/Utils"

const BaseBox = (props) => 
{
  const Props = getValidProps(props)

  return (
  <div className={`box ${Props.class}`} {...Props.props} style={{...Props.styles}}>
    {props.children}
  </div>)
}

export const Box = (props) => (
  <BaseBox {...props} classAdd="regular" />
);

export const PromptBox = (props) => (
  <BaseBox {...props} classAdd="prompt" />
);


