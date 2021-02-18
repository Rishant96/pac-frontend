import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { QAForm } from "../components";
import { HeaderContainer, InfoForm, QuestionAnswer } from "../containers";

const GetPACForm = `
  query {
    form (id: 1) {
      title
      firstQuestionId
    }
  }
`;

const GetSurgeon = `
  query ($secret: String!) {
    surgeonSecret(surgeonSecret: $secret)
    {
      fullname
      qualification
      email
      number
    }
  }
`;

export const Form: React.FC = () => {
  const [questionNums, setQuestionNums] = useState([0]);
  const [quesAns, setQuesAns] = useState({});

  const [formInfo, setFormInfo] = useState({
    title: "...",
    firstQuestionId: 0,
  });

  const [patientInfo, setPatientInfo] = useState({
    name: "",
    email: "",
    age: 0,
    gender: "",
    number: "",
  });

  const [surgeonInfo, setSurgeonInfo] = useState({
    fullname: "...",
    email: "...",
    number: "...",
  });

  const { secret } = useParams<{ secret: string }>();

  const handleStart = (e: FormEvent) => {
    e.preventDefault();
    setQuestionNums([...questionNums, formInfo.firstQuestionId]);
  };

  const handleNext = (
    e: FormEvent,
    id: number,
    ansVal: string,
    nextId: number,
    value: string = ""
  ) => {
    e.preventDefault();
    const val = parseInt(ansVal);

    if (val !== -1) {
      if (id !== null) {
        setQuesAns({ ...quesAns, [id]: { id: val, value } });
      }
      if (nextId !== null) {
        setQuestionNums([...questionNums, nextId]);
      }
    }
  };

  const handleSubmit = (
    e: FormEvent
  ) => {
    e.preventDefault();
    console.log(questionNums, quesAns);
    alert("Form submitted");
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  const [secretResult] = useQuery({
    // reexecuteSecret (_)
    query: GetSurgeon,
    variables: { secret },
  });

  const [formResult] = useQuery({
    // reexecuteSecret (_)
    query: GetPACForm,
  });

  useEffect(() => {
    const { data, fetching, } = secretResult;

    if (!fetching) {
      setSurgeonInfo(data.surgeonSecret);
    }
  }, [secretResult]);

  useEffect(() => {
    const { data, fetching, } = formResult;

    if (!fetching) {
      setFormInfo({
        title: data.form.title,
        firstQuestionId: data.form.firstQuestionId,
      });
    }
  }, [formResult]);

  let content = <span>Oops something went wrong...</span>;

  if (questionNums[questionNums.length - 1] === 0) {
    content = (
      <InfoForm
        surgeonInfo={surgeonInfo}
        patientInfo={patientInfo}
        setPatientInfo={setPatientInfo}
        handleStart={handleStart}
      />
    );
  } else {
    content = (
      <QuestionAnswer
        q_id={questionNums[questionNums.length - 1]}
        handleNext={handleNext}
        handleSubmit={handleSubmit}
      />
    );
  }

  return (
    <HeaderContainer>
      <QAForm>
        <QAForm.Title>{formInfo.title}</QAForm.Title>
        <br />
        <QAForm.Base>{content}</QAForm.Base>
      </QAForm>
    </HeaderContainer>
  );
};
