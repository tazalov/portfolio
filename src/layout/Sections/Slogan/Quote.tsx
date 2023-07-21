import React from "react";
import { Icon } from "../../../components/Icon/Icon";
import styled, { css } from "styled-components";

type QuotePT = {
  text: string;
  author?: boolean;
};

export const Quote = (props: QuotePT) => {
  return (
    <QouteWrapper>
      <StyledQuote author={props?.author}>
        <legend>
          <Icon
            iconId={"quotes"}
            width={"42"}
            height={"29"}
            viewBox={"0 0 42 29"}
          />
        </legend>
        {props.text}
      </StyledQuote>
    </QouteWrapper>
  );
};

const QouteWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;

type StyledQuotePT = {
  author?: boolean;
};

const StyledQuote = styled.fieldset<StyledQuotePT>`
  min-width: 500px;
  ${(props) =>
    props.author &&
    css`
      min-width: 100px;
    `}
`;
