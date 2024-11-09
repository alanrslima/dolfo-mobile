import { IconButton } from "@/components/atoms";
import { NavBarHeaderContainer } from "./nav-bar-header.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

type HeaderProps = {
  float?: boolean;
};

export function NavBarHeader(props: HeaderProps) {
  const { top } = useSafeAreaInsets();

  return (
    <NavBarHeaderContainer $float={props.float} $safeAreaInsetTop={top}>
      <IconButton name="chevron-left" onPress={router.back} />
    </NavBarHeaderContainer>
  );
}
