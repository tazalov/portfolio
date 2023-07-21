import styled, { css } from "styled-components";

type AbsoluteIconPT = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

export const AbsoluteIcon = styled.div<AbsoluteIconPT>`
  z-index: 1;
  position: absolute;
  ${(props) =>
    props.top &&
    css`
      top: ${props.top};
    `}
  ${(props) =>
    props.left &&
    css`
      left: ${props.left};
    `}
  ${(props) =>
    props.right &&
    css`
      right: ${props.right};
    `}
  ${(props) =>
    props.bottom &&
    css`
      bottom: ${props.bottom};
    `}
`;
