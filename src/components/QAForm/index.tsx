import React from "react";
import {
  Container,
  Base,
  Title,
  Question,
  Answer,
  Label,
  TextLabel,
  Field,
  FieldList,
  Text,
  TextArea,
  Radio,
  Checkbox,
  Input,
  ButtonPrimary,
  ButtonSecondary,
  AnswerField,
  AnswerLabel
} from "./form.styles";

type QAFormComponent = React.FC & {
  Base: React.FC;
  Title: React.FC;
  Question: React.FC;
  Answer: React.FC;
  Label: React.FC;
  TextLabel: React.FC;
  Field: React.FC;
  FieldList: React.FC;
  Text: React.FC;
  TextArea: React.FC;
  Radio: React.FC<any>;
  Checkbox: React.FC;
  Input: React.FC<any>;
  ButtonPrimary: React.FC<any>;
  ButtonSecondary: React.FC<any>;
  AnswerField: React.FC<any>;
  AnswerLabel: React.FC<any>;
};

export const QAForm: QAFormComponent = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

QAForm.Base = ({ children, ...restProps }) => <Base {...restProps}>{children}</Base>;

QAForm.Title = ({ children, ...restProps }) => <Title {...restProps}>{children}</Title>

QAForm.Question = ({ children, ...restProps }) => <Question {...restProps}>{children}</Question>

QAForm.Answer = ({ children, ...restProps }) => <Answer {...restProps}>{children}</Answer>

QAForm.Text = ({ children, ...restProps }) => <Text {...restProps}>{children}</Text>

QAForm.Label = ({ children, ...restProps }) => <Label {...restProps}>{children}</Label>

QAForm.AnswerLabel = ({ children, ...restProps }) => <AnswerLabel {...restProps}>{children}</AnswerLabel>

QAForm.TextLabel = ({ children, ...restProps }) => <TextLabel {...restProps}>{children}</TextLabel>

QAForm.FieldList = ({children, ...restProps}) => <FieldList {...restProps}>{children}</FieldList>

QAForm.Field = ({children, ...restProps}) => <Field {...restProps}>{children}</Field>

QAForm.AnswerField = ({children, ...restProps}) => <AnswerField {...restProps}>{children}</AnswerField>


QAForm.TextArea = ({ children, ...restProps }) => <TextArea {...restProps}>{children}</TextArea>

QAForm.ButtonPrimary = ({ children, ...restProps }) => <ButtonPrimary {...restProps}>{children}</ButtonPrimary>

QAForm.ButtonSecondary = ({ children, ...restProps }) => <ButtonSecondary {...restProps}>{children}</ButtonSecondary>

QAForm.Input = ({ children, ...restProps }) => <Input {...restProps}>{children}</Input>

QAForm.Radio = ({ children, ...restProps }) => <Radio type="radio" {...restProps}>{children}</Radio>

QAForm.Checkbox = ({ children, ...restProps }) => <Checkbox {...restProps}>{children}</Checkbox>

