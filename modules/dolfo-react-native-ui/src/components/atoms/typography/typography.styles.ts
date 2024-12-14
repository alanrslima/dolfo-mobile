import styled, {css, DefaultTheme} from 'styled-components/native';
import {TypographyType} from './typography';
import {ColorProps} from '../../../types';

const textTypeStyles = (theme: DefaultTheme, type: TypographyType) =>
  ({
    caption: css`
      font-size: 12px;
      line-height: 20px;
      font-weight: 600;
    `,
    overline: css`
      font-size: 10px;
      line-height: 18px;
    `,
    'body-default-bold': css`
      font-size: 14px;
      line-height: 22px;
      font-weight: bold;
    `,
    'body-default': css`
      font-size: 14px;
      line-height: 22px;
    `,
    'body-large-bold': css`
      font-size: 16px;
      line-height: 24px;
      font-weight: bold;
    `,
    'body-large': css`
      font-size: 16px;
      line-height: 24px;
    `,
    'title-group': css`
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
    `,
    'title-body': css`
      font-size: 18px;
      line-height: 24px;
      font-weight: 600;
    `,
    'title-subsection': css`
      font-size: 22px;
      line-height: 28px;
      font-weight: 600;
    `,
    'title-section': css`
      font-size: 26px;
      line-height: 32px;
      font-weight: 600;
    `,
    'title-screen': css`
      font-size: 30px;
      line-height: 34px;
      font-weight: 600;
    `,
    'display-small': css`
      font-size: 40px;
      line-height: 120px;
      font-weight: 600;
    `,
    'display-medium': css`
      font-size: 64px;
      line-height: 120px;
      font-weight: 600;
    `,
    'display-large': css`
      font-size: 96px;
      line-height: 120px;
      font-weight: 600;
    `,
  }[type]);

export const TypographyText = styled.Text<{
  $type: TypographyType;
  $color: keyof ColorProps;
}>`
  color: ${({$color, theme}) => theme.colors[$color]};

  ${({theme, $type}) => textTypeStyles(theme, $type)}
`;
