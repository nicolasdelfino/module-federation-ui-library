import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { ConfirmButton, RejectButton, Button, Heading, Box, PromptBox, Text, Divider, AvatarBox } from "team-ui/Components"

const Main = () => {
  return (
    <div className="site">
      <div className="page">
        <Heading mT={0} as="h1" mB={20}>Home</Heading>
        <AvatarBox sh avatarName="Nicolas" mB={20}></AvatarBox>
        <PromptBox mB={20}>This is a federated prompt box component made by the UI team</PromptBox>
        <Text>Click on the UI fragment catalog to see what else the UI team offers...</Text>
      </div>
    </div>
  )
};

export default Main;
