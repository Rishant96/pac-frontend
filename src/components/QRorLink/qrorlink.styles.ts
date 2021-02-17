import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Link = styled(ReachRouterLink)`
  text-decoration: none;
  font-size: 1.2em;
  margin-right: 30px;
  color: #0000ee;

  &:visited {
    color: #0000ee;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const QRCode = styled.div`
  margin: auto;

  @media (max-width: 900px) {
    margin-top: 25px;
  }
`;
