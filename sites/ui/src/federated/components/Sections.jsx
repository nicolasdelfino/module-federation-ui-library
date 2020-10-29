import React from "react";
import "./styles/SectionStyles.css";
import { getValidProps } from "team-ui/Components/Utils"

const BaseSection = (props) => 
{
  const Props = getValidProps(props)

  return (
    <div className={`section ${Props.class}`} {...Props.props} style={{...Props.styles}}>
      {props.children}
    </div>)
}

export const Section = (props) => (
  <BaseSection {...props} />
);
