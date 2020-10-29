import React from "react";
import "./styles/ButtonStyles.css";
import { getValidProps } from "team-ui/Components/Utils"

const BaseHeading = (props) => 
{
  const Props = getValidProps(props)

  const Tag = Props.tag;
  return <Tag {...Props.props} 
  style={{...Props.styles}}>{props.children}</Tag>
}

export const Heading = (props) => (
  <BaseHeading {...props} />
);

export const BigHeading = (props) => (
  <BaseHeading {...props} as="h1" />
);


