import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ColorProps } from "@/types";
import { IconButtonContainer, IconContainer, IconWrapper } from "./icon.styles";

export type IconNames = keyof typeof MaterialCommunityIcons.glyphMap;

export type IconProps = {
  name: IconNames;
  size?: number;
  color?: keyof ColorProps;
};

export type IconButtonProps = IconProps & {
  onPress?: () => void;
  bgColor?: keyof ColorProps;
};

export function Icon({ color = "black", ...rest }: IconProps) {
  return <IconContainer $color={color} {...rest} />;
}

export function IconButton({
  color = "black",
  bgColor = "white",
  ...rest
}: IconButtonProps) {
  return (
    <IconWrapper>
      <IconButtonContainer
        onPress={() => console.log("PRESSED!")}
        $bgColor={bgColor}
        $color={color}
        {...rest}
      />
    </IconWrapper>
  );
}
