import React from "react";
import "./styles/FlexStyles.css";
import { getValidProps } from "team-ui/Components/Utils"

const BaseFlex = (props) => 
{
  const Props = getValidProps(props)

  return (
    <div className={`flexSpread ${Props.class}`} {...Props.props} style={{...Props.styles}}>
      {props.children}
    </div>)
}

export const FlexSpread = (props) => (
  <BaseFlex {...props} />
);
