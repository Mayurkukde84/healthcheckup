import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import RightMenu from "./RightMenu";

function RightSidebar() {
  return (
    <Section>
      <Avatar />
      <RightMenu />
    </Section>
  );
}

const Section = styled.section`
  height: 100%;
  width: 100%;
  background-color: var(--dark-background-color);
  padding: 0 1rem;
  padding-top: 2rem;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 0 2rem;
    padding-top: 2rem;
  }
`;

export default RightSidebar;
