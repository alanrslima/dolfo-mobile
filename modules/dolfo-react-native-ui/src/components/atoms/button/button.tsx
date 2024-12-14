import React from 'react';
import {ButtonContainer, ButtonText} from './button.styles';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'outline';

export type ButtonProps = {
  size?: ButtonSizes;
  variant?: ButtonVariants;
  title: string;
};

export function Button({size = 'md', variant = 'primary', title}: ButtonProps) {
  return (
    <ButtonContainer $variant={variant} $size={size}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
