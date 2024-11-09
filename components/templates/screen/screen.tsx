import { ReactNode } from "react";
import { ScreenContainer } from "./screen.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenProps = {
  children: ReactNode;
  useTopSafeArea?: boolean;
  useBottomSafeArea?: boolean;
  header?: ReactNode;
};

export function Screen({
  useBottomSafeArea = false,
  useTopSafeArea = false,
  header,
  children,
}: ScreenProps) {
  const { top, bottom } = useSafeAreaInsets();

  const marginBottom = useBottomSafeArea ? bottom : 0;
  const marginTop = useTopSafeArea ? top : 0;

  return (
    <ScreenContainer $marginBottom={marginBottom} $marginTop={marginTop}>
      {header}
      {children}
    </ScreenContainer>
  );
}
