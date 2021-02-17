import React, { useState, FormEvent } from "react";
import { useQuery } from "urql";
import { SimpleForm } from "../components";
import { HeaderContainer } from "../containers";
import * as ROUTES from '../constants/routes';
import { Redirect } from "react-router-dom";

const GetSurgeonLink = `
  query ($emailLink: String!) {
    surgeon (surgeonEmail: $emailLink) {
      secret
    }
  }
`;

type SecretQuery = {
  emailLink: string;
};

export const ForgotLink: React.FC = () => {
  const [emailLink, setEmailLink] = useState("");
  const [isEmailSet, setIsEmailSet] = useState(false);

  const Secret = ({ emailLink }: SecretQuery) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [secretResult, reexecuteSecret] = useQuery({
      // reexecuteSecret (_)
      query: GetSurgeonLink,
      variables: { emailLink },
      pause: !isEmailSet,
    });

    const { data, fetching, error } = secretResult;

    if (data === undefined) return <span></span>;
    if (fetching) return <span>Loading...</span>;
    if (error) return <span>Oh no... {error.message}</span>;
    if (data.surgeon === null) return <span>Email address not found</span>;
    if (data.surgeon.secret === null) return <span>Something went wrong...</span>;

    return <Redirect to={`${ROUTES.REGISTERED}/${data.surgeon.secret}`} />
  };

  const handleGetLink = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailLink !== "") {
      setIsEmailSet(true);
    }
  };

  return (
    <HeaderContainer>
      <SimpleForm>
        <SimpleForm.Title>Forgot link</SimpleForm.Title>
        <SimpleForm.Base onSubmit={handleGetLink} method="POST">
          <SimpleForm.Input
            placeholder="Email"
            type="email"
            value={emailLink}
            autoFocus
            onChange={(e) => {
              setEmailLink(e.target.value);
              setIsEmailSet(false);
            }}
          />
          <SimpleForm.Submit>Get Link</SimpleForm.Submit>
        </SimpleForm.Base>
      </SimpleForm>
      {Secret({ emailLink })}
    </HeaderContainer>
  );
};
