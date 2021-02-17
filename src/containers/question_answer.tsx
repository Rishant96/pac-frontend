import { Console } from "console";
import { FormEvent, useEffect, useState } from "react";
import { useQuery } from "urql";
import { QAForm } from "../components";

const NextQuestion = `
  query ($q_id: Int!) {
    question(questionId: $q_id) {
      id
      formId
      display
      nextQuestionId
      answers {
        id
        formId
        questionId
        value
        level
        type
        display
      }
    }
  }
`;

const CheckBranch = `
query ($q_id: Int!) {
  branch(questionId: $q_id) {
    id
    formId
    questionId
    nextQuestionId
    answerId
  }
}
`;

export const QuestionAnswer: React.FC<any> = ({
  q_id,
  handleNext,
  handleSubmit,
  a_id = -1,
  a_val = null,
}) => {
  const [question, setQuestion] = useState("...");
  const [nextQId, setNextQId] = useState<any>(-1);
  const [answers, setAnswers] = useState<any[]>([]);
  const [ansSelected, setAnsSelected] = useState({
    id: a_id === -1 ? 0 : a_id,
    value: a_val === null ? -1 : a_val,
  });
  const [checkBranch, setCheckBranch] = useState(false);
  const [branchInfo, setBranchInfo] = useState({ branchId: 0, ansId: 0 });
  const [btnText, setBtnText] = useState("...");
  const [hasBranch, setHasBranch] = useState(false);

  const [nextQuestion] = useQuery({
    // reexecuteSecret (_)
    query: NextQuestion,
    variables: { q_id },
  });

  const [branch] = useQuery({
    query: CheckBranch,
    variables: { q_id },
    // pause: checkBranch,
  });

  useEffect(() => {
    const { data, fetching, error } = nextQuestion;

    if (!fetching) {
      setQuestion(data.question.display);
      setAnswers(data.question.answers);
      setNextQId(data.question.nextQuestionId);
      setCheckBranch(true);
    }
  }, [nextQuestion]);

  useEffect(() => {
    if (checkBranch) {
      const { data, fetching, error } = branch;

      if (!fetching && data.branch !== null) {
        setBranchInfo({
          branchId: data.branch.nextQuestionId,
          ansId: data.branch.answerId,
        });
        setHasBranch(true);
        setCheckBranch(false);
      } else {
        setHasBranch(false);
      }
    }

    if (branchInfo.branchId !== 0 && ansSelected.id === branchInfo.ansId) {
      setNextQId(branchInfo.branchId);
      setBtnText("Next");
    } else {
      if (hasBranch) {
        setNextQId(-1);
        setBtnText("Submit");
      } else {
        if (nextQId === -1) {
          setBtnText("Submit");
        } else {
          setBtnText("Next");
        }
      }
    }
  }, [branch, ansSelected, checkBranch, branchInfo]);

  return (
    <>
      <QAForm.Title>{question}</QAForm.Title>
      <QAForm.Answer>
        {answers.length === 0 ? (
          "..."
        ) : answers.length === 1 ? (
          <QAForm.AnswerField>
            <span></span>
            <QAForm.Input
              value={ansSelected.value}
              onChange={(e: FormEvent<HTMLInputElement>) => {
                setAnsSelected({
                  id: answers[0].id,
                  value: e.currentTarget.value,
                });
              }}
            />
          </QAForm.AnswerField>
        ) : (
          answers.map((ans) => (
            <QAForm.AnswerField key={ans.id}>
              <QAForm.Radio
                value={ans.value}
                name={`answer_${ans.id}`}
                checked={ansSelected.value === ans.value}
                onChange={(e: FormEvent<HTMLInputElement>) => {
                  setAnsSelected({ id: ans.id, value: ans.value });
                }}
              />
              <QAForm.AnswerLabel>{ans.display}</QAForm.AnswerLabel>
            </QAForm.AnswerField>
          ))
        )}
      </QAForm.Answer>
      <QAForm.ButtonPrimary
        onClick={(e: FormEvent) => {
          btnText === "Submit"
            ? handleSubmit(e)
            : handleNext(e, q_id, ansSelected.value, nextQId);
          setAnsSelected({ id: 0, value: -1 });
        }}
      >
        {btnText}
      </QAForm.ButtonPrimary>
    </>
  );
};
