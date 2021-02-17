/* eslint-disable eqeqeq */
import React, { FormEvent, useState } from "react";
import { useMutation } from "urql";
import { SimpleForm } from "../components";
import { HeaderContainer } from "../containers";
import * as ROUTES from "../constants/routes";
import { Redirect } from "react-router-dom";

const RegisterSurgeon = `
  mutation ($fullname: String!, $email: String!, $qualification: String!, $number: String! ) {
    addSurgeon (fullname: $fullname, email: $email, qualification: $qualification, number: $number) {
      id
      createdAt
      updatedAt
      fullname
      qualification
      email
      number
      secret
    }
  }
`;

export const Register: React.FC = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [error, setError] = useState("");
  const [secret, setSecret] = useState("");
  const [redirect, setRedirect] = useState(false);

  const [, registerSurgeon] = useMutation(
    RegisterSurgeon
  );

  const handleRegisteration = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (
      fullname == "" ||
      email == "" ||
      qualification == ""
    ) {
      setError("Some fields left blank.");
    } else {
      const variables = {
        fullname,
        email,
        qualification,
        number: phNumber || "",
      };

      registerSurgeon(variables).then((res) => {
        if (res.error) {
          console.error("Oh no!", res.error);
          setError("Error registering surgeon.");
        } else {
          setSecret(res.data.addSurgeon.secret);
          setRedirect(true);
        }
      });
    }
  };

  return (
    <HeaderContainer>
      {redirect ? (
        <Redirect to={`/registered/${secret}`} />
      ) : (
        <SimpleForm>
          <SimpleForm.Title>Register for a link</SimpleForm.Title>
          {error !== "" && <SimpleForm.Text>{error}</SimpleForm.Text>}
          <SimpleForm.Base onSubmit={handleRegisteration} method="POST">
            <SimpleForm.Input
              placeholder="Full Name"
              autoFocus
              maxLength={80}
              minLength={0}
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <SimpleForm.Input
              placeholder="Qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
            <SimpleForm.Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SimpleForm.Input
              placeholder="Phone Number"
              type="tel"
              pattern="[0-9]{10}"
              value={phNumber}
              onChange={(e) => setPhNumber(e.target.value)}
            />
            <SimpleForm.Submit>Sign Up</SimpleForm.Submit>
            <SimpleForm.SmallLink to={ROUTES.FORGOT_LINK}>
              Forgot link? click here!
            </SimpleForm.SmallLink>
          </SimpleForm.Base>
        </SimpleForm>
      )}
    </HeaderContainer>
  );
};
