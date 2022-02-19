import React from "react";
import { Contener, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Contener>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>
      {body}
    </Body>
  </Contener>
)

export default Section;