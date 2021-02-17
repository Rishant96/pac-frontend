import { ChangeEvent } from "react";
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  SmallLink,
  Link,
  Input,
  Submit,
} from "./simple-form.styles";

type BaseProps = {
  method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

type InputProps = {
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  type?: string;
  pattern?: string;
  placeholder: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

type LinkProps = {
  to: string;
}

type SimpleFormComponent = React.FC & {
  Error: React.FC;
  Base: React.FC<BaseProps>;
  Title: React.FC;
  Text: React.FC;
  SmallLink: React.FC<LinkProps>;
  Link: React.FC<LinkProps>;
  Input: React.FC<InputProps>;
  Submit: React.FC;
};

export const SimpleForm: SimpleFormComponent = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

SimpleForm.Error = ({ children, ...restProps }) => (
  <Error {...restProps}>{children}</Error>
);

SimpleForm.Base = ({ children, ...restProps }) => (
  <Base {...restProps}>{children}</Base>
);

SimpleForm.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

SimpleForm.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);

SimpleForm.SmallLink = ({ children, to, ...restProps }) => (
  <SmallLink to={to} {...restProps}>{children}</SmallLink>
);

SimpleForm.Link = ({ children, to, ...restProps }) => (
  <Link to={to} {...restProps}>{children}</Link>
);

SimpleForm.Input = ({ ...restProps }) => <Input {...restProps} />;

SimpleForm.Submit = ({ children, ...restProps }) => (
  <Submit {...restProps}>{children}</Submit>
);
