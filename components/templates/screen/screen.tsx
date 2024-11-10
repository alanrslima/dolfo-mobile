import { ReactNode } from "react";
import { ScreenContainer, ScreenContent } from "./screen.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ColorProps } from "@/types";

type ScreenProps = {
  children: ReactNode;
  useTopSafeArea?: boolean;
  useBottomSafeArea?: boolean;
  header?: ReactNode;
  safeAreaColor?: keyof ColorProps;
};

export function Screen({
  useBottomSafeArea = false,
  useTopSafeArea = false,
  header,
  children,
  safeAreaColor = "surface",
}: ScreenProps) {
  const { top, bottom } = useSafeAreaInsets();

  const marginBottom = useBottomSafeArea ? bottom : 0;
  const marginTop = useTopSafeArea ? top : 0;

  return (
    <ScreenContainer
      $safeAreaColor={safeAreaColor}
      $marginBottom={marginBottom}
      $marginTop={marginTop}
    >
      {header}
      <ScreenContent>{children}</ScreenContent>
    </ScreenContainer>
  );
}
