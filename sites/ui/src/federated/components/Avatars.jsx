import React from 'react'
import './styles/AvatarStyles.css'
import { Divider, FlexSpread } from "team-ui/Components"
import { getValidProps } from "team-ui/Components/Utils"

const BaseBox = (props) => 
{
  const Props = getValidProps(props)

  return (
  <div className={`box ${Props.class}`} {...Props.props} style={{...Props.styles}}>
    {props.children}
  </div>)
}

export const AvatarBox = (props) => {
  const Props = getValidProps(props)

  return (
  <div className={`avatarBox ${Props.class}`} {...Props.props} style={{...Props.styles}}>
    <div className="avatarWrap">
        <div className="avatarCircle">
          {props.avatarName.charAt(0)}
        </div>
      </div>
      <Divider />
      <div className="avatarInfo">
        {props.children}
      </div>
  </div>)
}