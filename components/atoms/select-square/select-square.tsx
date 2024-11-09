import { TouchableOpacityProps } from "react-native";
import {
  SelectSquareContainer,
  SelectSquareText,
} from "./select-square.styles";
import { Icon, IconNames } from "../icon/icon";

export type SelectSquareProps = TouchableOpacityProps & {
  text: string;
  selected?: boolean;
  icon?: IconNames;
};

export function SelectSquare({
  text,
  icon,
  selected,
  ...rest
}: SelectSquareProps) {
  return (
    <SelectSquareContainer $selected={selected} {...rest}>
      {icon && <Icon color="onBackgroundPrimary" name={icon} size={32} />}
      <SelectSquareText>{text}</SelectSquareText>
    </SelectSquareContainer>
  );
}
