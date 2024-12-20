import styled, {css, DefaultTheme} from 'styled-components/native';
import {Typography} from '../typography/typography';

import {ButtonSizes, ButtonVariants} from './button';
import {ColorProps} from '../../../types';

const sizesStyles = (theme: DefaultTheme, size: ButtonSizes) =>
  ({
    xs: css`
      height: 32px;
    `,
    sm: css`
      height: 36px;
    `,
    md: css`
      height: 40px;
    `,
    lg: css`
      height: 44px;
    `,
    xl: css`
      height: 48px;
    `,
  }[size]);

const variantsContainerStyles = (
  theme: DefaultTheme,
  variant: ButtonVariants,
) =>
  ({
    primary: css`
      background-color: ${theme.colors.primary};
    `,
    secondary: css`
      background-color: ${theme.colors.secondary};
    `,
    tertiary: css`
      background-color: ${theme.colors.backgroundElevated};
    `,
    outline: css`
      background-color: ${theme.colors.secondary};
    `,
  }[variant]);

const variantsTextColor: {[key in ButtonVariants]: keyof ColorProps} = {
  outline: 'blackA900',
  primary: 'secondary',
  secondary: 'primary',
  tertiary: 'blackA900',
};

export const ButtonContainer = styled.TouchableOpacity<{
  $size: ButtonSizes;
  $variant: ButtonVariants;
  $full?: boolean;
  $fit?: boolean;
}>`
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  padding: 0px ${({theme}) => theme.spaces[5]};
  align-self: flex-start;
  border-radius: ${({theme}) => theme.radii.md};
  min-width: ${({$fit, $full}) => ($fit ? 'auto' : $full ? '100%' : '175px')};

  ${({theme, $size}) => sizesStyles(theme, $size)}
  ${({theme, $variant}) => variantsContainerStyles(theme, $variant)};
`;

export const ButtonText = styled(Typography).attrs<{$variant: ButtonVariants}>(
  ({$variant}) => ({
    type: 'body-default-bold',
    color: variantsTextColor[$variant],
  }),
)``;
