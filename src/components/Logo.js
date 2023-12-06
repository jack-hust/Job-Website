import React from "react";
import { styled } from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <p className="logo-name">SettEase</p>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .logo-name {
    font-size: 40px;
    color: var(--primary-600);
    font-weight: 700;
    font-family: Roboto Condensed;
  }
`;

export default Logo;
