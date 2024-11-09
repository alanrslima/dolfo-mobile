import { TouchableOpacityProps } from "react-native";
import {
  SelectButtonContainer,
  SelectButtonText,
} from "./select-button.styles";
import { Icon, IconNames } from "../icon/icon";

export type SelectButtonProps = TouchableOpacityProps & {
  text: string;
  selected?: boolean;
  icon?: IconNames;
};

export function SelectButton({
  text,
  icon,
  selected,
  ...rest
}: SelectButtonProps) {
  return (
    <SelectButtonContainer $selected={selected} {...rest}>
      {icon && <Icon color="onBackgroundPrimary" name={icon} size={24} />}
      <SelectButtonText>{text}</SelectButtonText>
    </SelectButtonContainer>
  );
}
