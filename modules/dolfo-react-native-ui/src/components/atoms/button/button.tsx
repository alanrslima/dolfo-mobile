import React from 'react';
import {ButtonContainer, ButtonText} from './button.styles';
import {TouchableOpacityProps} from 'react-native';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'outline';

export type ButtonProps = TouchableOpacityProps & {
  size?: ButtonSizes;
  variant?: ButtonVariants;
  title: string;
  fit?: boolean;
  full?: boolean;
};

export function Button({
  size = 'md',
  variant = 'primary',
  title,
  full,
  fit,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      {...rest}
      $full={full}
      $fit={fit}
      $variant={variant}
      $size={size}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
