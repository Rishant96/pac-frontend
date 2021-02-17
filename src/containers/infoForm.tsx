import { ChangeEvent, FormEvent } from "react";
import { QAForm } from "../components";

type InfoProps = {
  setPatientInfo: any;
  patientInfo: any;
  surgeonInfo: any;
  handleStart: any;
};

export const InfoForm: React.FC<InfoProps> = ({
  patientInfo,
  setPatientInfo,
  surgeonInfo,
  handleStart
}) => {
  return (
    <>
      <QAForm.Field>
        <QAForm.Label>Patient's Fullname</QAForm.Label>
        <QAForm.Input
          autoFocus
          value={patientInfo.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPatientInfo({ ...patientInfo, name: e.target.value });
          }}
        />
      </QAForm.Field>

      <QAForm.Field>
        <QAForm.Label>Patient's Email</QAForm.Label>
        <QAForm.Input
          type="email"
          value={patientInfo.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPatientInfo({ ...patientInfo, email: e.target.value });
          }}
        />
      </QAForm.Field>

      <QAForm.Field>
        <QAForm.Label>Patient's Age</QAForm.Label>
        <QAForm.Input
          type="number"
          minValue="0"
          maxValue="250"
          value={patientInfo.age}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPatientInfo({ ...patientInfo, age: e.target.value });
          }}
        />
      </QAForm.Field>

      <QAForm.Field>
        <QAForm.Label>Patient's Gender</QAForm.Label>
        <QAForm.FieldList>
          <QAForm.FieldList>
            <QAForm.Radio
              value="male"
              name="gender"
              checked={patientInfo.gender === "male"}
              onChange={(e: FormEvent<HTMLInputElement>) => {
                setPatientInfo({
                  ...patientInfo,
                  gender: e.currentTarget.value,
                });
              }}
            />
            <QAForm.Label>Male</QAForm.Label>
          </QAForm.FieldList>
          <QAForm.FieldList>
            <QAForm.Radio
              value="female"
              name="gender"
              checked={patientInfo.gender === "female"}
              onChange={(e: FormEvent<HTMLInputElement>) => {
                setPatientInfo({
                  ...patientInfo,
                  gender: e.currentTarget.value,
                });
              }}
            />
            <QAForm.Label>Female</QAForm.Label>
          </QAForm.FieldList>
        </QAForm.FieldList>
      </QAForm.Field>

      <QAForm.Field>
        <QAForm.Label>Patient's Ph. No.</QAForm.Label>
        <QAForm.Input
          value={patientInfo.number}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPatientInfo({ ...patientInfo, number: e.target.value });
          }}
        />
      </QAForm.Field>

      <QAForm.Field>
        <QAForm.Label>Surgeon's Fullname</QAForm.Label>
        <QAForm.TextLabel>{surgeonInfo.fullname}</QAForm.TextLabel>
      </QAForm.Field>

      <QAForm.Field>
        <QAForm.Label>Surgeon's Email</QAForm.Label>
        <QAForm.TextLabel>{surgeonInfo.email}</QAForm.TextLabel>
      </QAForm.Field>

      <QAForm.Field>
        <QAForm.Label>Surgeon's Ph. No.</QAForm.Label>
        <QAForm.TextLabel>{surgeonInfo.number}</QAForm.TextLabel>
      </QAForm.Field>

      <QAForm.ButtonPrimary onClick={(e: FormEvent) => handleStart(e)}>Start</QAForm.ButtonPrimary>
    </>
  );
};
