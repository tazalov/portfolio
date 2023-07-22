import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { Link } from "../../../components/Link/Link";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Contacts = () => {
  return (
    <StyledContacts id={"contacts"}>
      <Container>
        <SectionTitle>
          <span>&lt;</span>
          <code>form</code>
          <span>&gt;</span>
        </SectionTitle>
        <ContactsTitle>
          <span>&lt;</span>
          <code>h2</code>
          <span>&gt;</span>write me<span>&lt;/</span>
          <code>h2</code>
          <span>&gt;</span>
        </ContactsTitle>
        <StyledForm>
          <StyledField placeholder={"Name"} />
          <StyledField placeholder={"Email"} />
          <StyledField placeholder={"Title"} />
          <StyledField as={"textarea"} placeholder={"Your message"} />
          <Button demo type={"submit"}>
            Send
          </Button>
        </StyledForm>
        <SectionTitle>
          <span>&lt;/</span>
          <code>form</code>
          <span>&gt;</span>
        </SectionTitle>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;
const ContactsTitle = styled(SectionTitle)`
  text-align: center;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 570px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  textarea {
    resize: none;
    min-height: 150px;
  }
`;
const StyledField = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  background-color: ${theme.colors.primaryBg};
  border: 1px solid ${theme.colors.secondaryFort};
  color: ${theme.colors.primaryFont};
  font-size: 16px;
  font-weight: 400;
  font-family: "Fira Code", monospace;
  z-index: 1;
`;
export const Button = styled(Link)`
  padding: 10px 20px;
  max-width: 100px;
`;
