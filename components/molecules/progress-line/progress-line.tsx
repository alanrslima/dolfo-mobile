import { Animated, useAnimatedValue } from "react-native";
import {
  ProgressLineContainer,
  ProgressLineContent,
} from "./progress-line.styles";
import { useEffect, useState } from "react";

export type ProgressLineProps = {
  progress: number;
};

export function ProgressLine(props: ProgressLineProps) {
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const animatedProgress = useAnimatedValue(0);
  const progressWidth = containerWidth * (props.progress / 100);

  useEffect(() => {
    if (containerWidth) {
      Animated.timing(animatedProgress, {
        toValue: progressWidth,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [containerWidth, props.progress]);

  return (
    <ProgressLineContainer
      onLayout={(evt) => setContainerWidth(evt.nativeEvent.layout.width)}
    >
      {progressWidth ? (
        <ProgressLineContent
          style={{ transform: [{ translateX: progressWidth }] }}
        />
      ) : (
        <></>
      )}
    </ProgressLineContainer>
  );
}
