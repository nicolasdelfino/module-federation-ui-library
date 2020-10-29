import React from "react";
import "./styles/ButtonStyles.css";
import getGenericComponentProps from './utils'
import { getValidProps } from "team-ui/Components/Utils"

const BaseButton = (props) => 
{
  const Props = getValidProps(props);

  return (
  <button 
    className={`button ${Props.class}`} 
    {...Props.props} 
    style={{...Props.styles}} 
    onClick={() => props.onClick ? props.onClick() : console.log('No onClick handler')}>
      {props.children}
    </button>)
}


export const ConfirmButton = (props) => (
  <BaseButton {...props} classAdd="confirm" />
);

export const RejectButton = (props) => (
  <BaseButton {...props} classAdd="danger" />
);

export const NavButton = (props) => (
  <BaseButton {...props} classAdd="navItem" />
);

export const Button = (props) => {
  return (
  <BaseButton {...props} className="button" />
)};

