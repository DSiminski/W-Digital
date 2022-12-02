import * as S from './styles.';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  title?: string | null;
  type?: 'button' | 'submit' | 'reset';
  themeColor?:string;
  color?:string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  width?: string;
  style?: React.CSSProperties;
  value?: React.InputHTMLAttributes<HTMLInputElement> | string | undefined | number | readonly string[] 
}

export const ButtonComponent = ({
  title,
  themeColor = '#6a7dfe',
  onClick,
  width,
  style,
  type,
}: ButtonProps) => {
  return (
    
      <S.StyledButton
        themeColor={themeColor}
        onClick={onClick}
        width={width}
        style={style}
        type={type}
      >
        {title}
      </S.StyledButton>
    
  );
};