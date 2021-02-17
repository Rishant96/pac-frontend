import React from "react";
import { Container, Brand, Content } from "./header.style";
import * as ROUTES from "../../constants/routes";

type HeaderComponent = React.FC & {
  Brand: React.FC;
  Content: React.FC;
};

export const Header: HeaderComponent = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Header.Brand = ({ children, ...restProps }) => (
  <Brand to={ROUTES.REGISTER} {...restProps}>{children}</Brand>
);

Header.Content = ({ children, ...restProps }) => (
  <Content {...restProps}>{children}</Content>
);
