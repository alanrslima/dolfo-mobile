import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonTitle } from "./button.styles";
import { Icon, IconNames } from "../icon/icon";
import { ColorProps } from "@/types";

export type ButtonSizes = "xs" | "sm" | "base" | "lg" | "xl";

export type ButtonVariants = "solid" | "outline" | "link";

export type ButtonProps = TouchableOpacityProps & {
  size?: ButtonSizes;
  variant?: ButtonVariants;
  title: string;
  leftIcon?: IconNames;
};

export function Button({
  size = "base",
  variant = "solid",
  title,
  leftIcon,
  ...rest
}: ButtonProps) {
  const tintColor: { [key in typeof variant]: keyof ColorProps } = {
    link: "onBackgroundPrimary",
    outline: "onBackgroundPrimary",
    solid: "onButtonPrimary",
  };

  return (
    <ButtonContainer $size={size} $variant={variant} {...rest}>
      {leftIcon && (
        <Icon name={leftIcon} size={16} color={tintColor[variant]} />
      )}
      <ButtonTitle color={tintColor[variant]}>{title}</ButtonTitle>
    </ButtonContainer>
  );
}
