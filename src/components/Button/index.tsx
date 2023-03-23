import { ReactNode } from 'react';
import { StyledButton } from './styles';

interface IButtonProps {
    bgColor?: string;
    widthSize?: string;
    children?: ReactNode;
    onClick?: () => void;
}

export default function Button({  bgColor, children, widthSize = "100%", onClick } : IButtonProps) {
  return (
    <StyledButton bgColor={bgColor} widthSize={widthSize} onClick={onClick}>
        {children}
    </StyledButton>
  );
}