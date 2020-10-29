import React from 'react'
import './styles/TestStyles.css'
import { getValidProps } from "team-ui/Components/Utils"

const BaseText = (props) => 
{
  const Props = getValidProps(props)

  return <p {...Props.props} 
  style={{...Props.styles}}>{props.children}</p>
}

export const Text = (props) => (
  <BaseText {...props} />
);