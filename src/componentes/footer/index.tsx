import { useState } from "react";
import * as S from './styles';

interface FooterPorps {
  bottom?: string;
  isEnd?: boolean;
  style?: React.CSSProperties;
}

export const Footer = ({bottom, isEnd, style }: FooterPorps) => {
  return (
    <footer>
        <div style={style}>
        <S.Footer>
          <S.Container>
            {isEnd ? (
              <h3>
                <S.Message>
                Made with love by Maria Julia and Dayane!
                <br />
                {bottom}
                </S.Message>
              </h3>
            ) : (
              <h3> <S.Message>{bottom}</S.Message> </h3> 
            )}
          </S.Container>
        </S.Footer>
        </div>
    </footer>
  );
}