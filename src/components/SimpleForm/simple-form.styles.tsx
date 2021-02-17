import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 5px 10px;
  outline: none;
  margin-bottom: 15px;

  &:focus {
    border-color: black;
  }
`;

export const Submit = styled.button`
  border: none;
  font-weight: bolder;
  padding: 10px;
  font-size: 16px;
  color: black;

  &:hover {
    background-color: #a7f7db;
    cursor: pointer;
  }
`;

export const Error = styled.div``;

export const Text = styled.p`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-top: 0;
  margin-bottom: 10px;
  color: red;
`;

export const SmallLink = styled(ReachRouterLink)`
  margin-top: 7px;
  text-decoration: none;
  font-weight: bold;
  color: #0000ee;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #0000ee;
  }
`;

export const Link = styled(ReachRouterLink)``;
