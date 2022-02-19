import React from "react";
import { Container, Header, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Container>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>
      {body}
    </Body>
  </Container>
)

export default Section;