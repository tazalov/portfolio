import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Button } from "../../../components/Button/Button";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>
        <span>&lt;form&gt;</span>write me<span>&lt;/form&gt;</span>
      </SectionTitle>
      <StyledForm>
        <StyledField placeholder={"name"} />
        <StyledField placeholder={"email"} />
        <StyledField placeholder={"title"} />
        <StyledField as={"textarea"} placeholder={"your message"} />
        <Button type={"submit"}>Send</Button>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #e5cc44;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;
const StyledField = styled.input`
  margin-bottom: 5px;
  padding: 5px;
`;
