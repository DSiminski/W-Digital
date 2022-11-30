import * as S from './styles';
import { useState } from "react";


interface FooterProps {
  title?: string;
  isFinite?: boolean;
  style?: React.CSSProperties;
}

export const Footer = ({title, isFinite, style}:FooterProps) => {
  return (
    <footer>
      <div style={style}>
        <S.FooterContainer>
          <S.Container>
            {isFinite ? (
              <h2>
                <S.Message>
                  Chao Bella 
                  <br />
                  {title}
                </S.Message>
              </h2>
            ) : (
              <h2> <S.Message>{title}</S.Message></h2>
            )}
          </S.Container>
        </S.FooterContainer>
      </div>
    </footer>
  );
};
//Testando// 