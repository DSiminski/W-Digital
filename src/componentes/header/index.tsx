import * as S from './styles';
import { useState } from "react";

interface HeaderProps {
  title?: string;
  isHome?: boolean;
  style?: React.CSSProperties;
}

export const Header = ({ title, isHome, style }: HeaderProps) => {
  return (
    <header>
      <div style={style}>
        <S.HeaderContainer>
          <S.Container>
            {isHome ? (
                <h2>
              <S.Message>
                Hello
                <br />
                {title}
              </S.Message>
              </h2>
            ) : (
             <h2> <S.Message>{title}</S.Message>  </h2> 
            )}
          </S.Container>
        </S.HeaderContainer>
      </div>
    </header>
  );
};
//Testando// 