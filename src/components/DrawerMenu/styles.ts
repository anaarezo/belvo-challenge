import styled from "styled-components";

import { BelvoLight } from "../../assets/logo/belvoLight";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-width: 1px;
  display: block;
  background-color: #ffffff;
  height: 76px;
  border-bottom: 1px solid #e2e6e9;
`;

export const Logo = styled(BelvoLight)``;

export const Link = styled.a`
  color: #000;
  text-decoration: none;
`;
