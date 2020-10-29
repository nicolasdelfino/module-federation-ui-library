import React from "react";
import ReactDOM from "react-dom";

import "team-ui/BaseStyles";
import "../../styles/index.css";

import { 
  ConfirmButton, 
  RejectButton, 
  Button, 
  Heading, 
  Box, 
  PromptBox, 
  FlexSpread, 
  Section, 
  Divider, 
  AvatarBox 
} from "team-ui/Components"

const Catalog = () => (
  <div className="page">
    <Heading mT={0} as="h1">UI Fragment catalog</Heading>
    <div>
      <Section>
        <Heading mT={0} as="h2">Buttons</Heading>
        <FlexSpread>
          <Button>DEFAULT BUTTON</Button>
          <Divider />
          <ConfirmButton sh onClick={() => console.log('confirm')}>Confirm</ConfirmButton>
          <Divider />
          <RejectButton sh onClick={() => console.log('reject')}>Reject</RejectButton>
        </FlexSpread>
      </Section>
      <Section mT={20}>
        <Heading mT={0} as="h2">Boxes</Heading>
        <FlexSpread>
          <Box>Regular box</Box>
          <Divider />
          <PromptBox>Prompt box</PromptBox>
        </FlexSpread>
      </Section>
      <Section mT={20}>
        <Heading mT={0} as="h2">Avatars</Heading>
        <AvatarBox sh avatarName="C">Avatar info</AvatarBox>
      </Section>
      <Section mT={20}>
        <Heading m={0} as="h2">Text inputs etc...</Heading>
      </Section>
    </div>
  </div>
);

export default Catalog