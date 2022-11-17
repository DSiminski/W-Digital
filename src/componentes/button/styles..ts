import { Button } from "@mui/material";
import styled, { css } from "styled-components";

interface ButtonProps {
  themeColor: string;
  isTitled: boolean;
  disabled?: boolean;
  dropDown?: boolean;
  height?: string;
  width?: string;
  border?: boolean;
  disablePaddingInline?: boolean;
  iconTop?: boolean;
  iconSize?: string;
}

export const StyledButton = styled(Button)<ButtonProps>`
  &&& {
    ${({
      isTitled,
      disablePaddingInline,
      height,
      width,
      themeColor,
      disabled,
      iconTop,
      iconSize,
    }) => css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      padding-block: 0.8rem;
      ${() => {
        if (!disablePaddingInline) {
          return css`
            padding-inline: ${isTitled ? "3.2rem" : "1.2rem"};
          `;
        }
      }}
      text-align: center;
      font-size: 1.2rem;
      line-height: 0;
      font-weight: 500;
      text-transform: none;
      margin-top: 0px;
      min-height: ${height || "3rem"};
      min-width: ${width || "3rem"};
      background-color: ${disabled ? "rgb(57, 71, 203)" : themeColor};
      svg {
        fill: ${disabled ? "rgb(57, 71, 203)" : "currentColor"};
        ${() => {
          if (iconSize) {
            return css`
              width: ${iconSize};
              height: ${iconSize};
            `;
          }
        }}
      }
      color: white;
      ${() =>
        iconTop &&
        css`
          flex-direction: column;
          border-radius: 1rem;
          gap: 1rem;
          padding-block: 0.5rem 1.2rem;
        `};
    `}
  }
`;