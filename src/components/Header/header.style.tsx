import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  top: 0;
  margin: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 2%;
  padding-right: 2%;
  z-index: 100;
  background-color: white;
`;

export const Brand = styled(ReachRouterLink)`
  color: black;
  margin: 0;
  text-decoration: none;
  font-size: 2.2em;
  font-weight: bolder;
`;

export const Content = styled.div`
  margin-top: 70px;
  margin-left: 10%;
  margin-right: 10%;
`;
