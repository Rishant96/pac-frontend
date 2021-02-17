import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-left: auto;
  margin-right: auto;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  min-width: 500px;
`;

export const Question = styled.div``;

export const Text = styled.p``;

export const Answer = styled.div`
  position: relative;
  right: 10px;
  margin-right: auto;
  margin-left: auto;
  min-width: 300px;
  margin-bottom: 15px;
`;

export const Field = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  padding-right: 30px;
`;

export const AnswerField = styled.div`
  display: grid;
  grid-template-columns: 15px auto;
`;

export const AnswerLabel = styled.div`
  text-align: center;
  margin: 10px 0;
`;

export const FieldList = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const Label = styled.p`
  text-align: right;
  padding-right: 20px;
`;

export const TextLabel = styled.p``;

export const TextArea = styled.textarea``;

export const Radio = styled.input`
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Checkbox = styled.input``;

export const Input = styled.input`
  font-size: 18px;
  padding: 5px 10px;
  outline: none;
  margin-bottom: 15px;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;

  &:focus {
    border-color: black;
  }
`;

export const ButtonPrimary = styled.button`
  border: none;
  font-weight: bolder;
  padding: 10px;
  font-size: 16px;
  color: black;
  width: 250px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 15px;

  &:hover {
    background-color: #a7f7db;
    cursor: pointer;
  }
`;

export const ButtonSecondary = styled.button`
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
