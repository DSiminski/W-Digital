import * as S from "./styles";
import { useState } from "react";

interface HeaderProps {
  title?: string;
  valor?: string;
  style?: React.CSSProperties;
}

export const TextBox = ({ title, style , valor}: HeaderProps) => {
  return (
    <header>

       <S.Title>{title}</S.Title>
        <S.Container>
            <S.Value>{valor}</S.Value>
        </S.Container>
    </header>
  );
};
