import { ColorProps, FontSizeProps, FontWeightProps } from "@/types";
import styled, { css, DefaultTheme } from "styled-components/native";

const weightStyles = (theme: DefaultTheme, weight: keyof FontWeightProps) =>
  ({
    regular: css`
      font-family: ${theme.fonts.poppinsRegular};
    `,
    medium: css`
      font-family: ${theme.fonts.poppinsMedium};
    `,
    semiBold: css`
      font-family: ${theme.fonts.poppinsSemiBold};
    `,
    bold: css`
      font-family: ${theme.fonts.poppinsBold};
    `,
  }[weight]);

export const TitleText = styled.Text<{
  $size: keyof FontSizeProps;
  $weight: keyof FontWeightProps;
  $color: keyof ColorProps;
}>`
  color: ${({ theme, $color }) => theme.colors[$color]};
  font-family: ${({ theme }) => theme.fonts.poppinsSemiBold};
  font-size: ${({ theme, $size }) => theme.fontSizes[$size]};

  ${({ theme, $weight }) => weightStyles(theme, $weight)}
`;
