import { useEffect, useRef, useState } from "react";
import {
  TextInputClose,
  TextInputContainer,
  TextInputInput,
} from "./text-input.styles";
import {
  TextInputProps as RNTextInputProps,
  Keyboard,
  Animated,
  useAnimatedValue,
} from "react-native";
import { Portal } from "@gorhom/portal";
import { Button } from "../button/button";

export type TextInputProps = RNTextInputProps;

export function TextInput(props: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const translateY = useAnimatedValue(0);

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      "keyboardWillShow",
      (e) => {
        setKeyboardVisible(true);
        Animated.timing(translateY, {
          duration: e.duration,
          toValue: -e.endCoordinates.height,
          useNativeDriver: true,
        }).start();
      }
    );
    const keyboardWillHideListener = Keyboard.addListener(
      "keyboardWillHide",
      (e) => {
        Animated.timing(translateY, {
          duration: e.duration,
          toValue: 0,
          useNativeDriver: true,
        }).start(() => setKeyboardVisible(false));
      }
    );

    return () => {
      keyboardWillHideListener.remove();
      keyboardWillShowListener.remove();
    };
  }, []);

  return (
    <TextInputContainer>
      <TextInputInput
        {...props}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        $isFocused={isFocused}
      />
      {isKeyboardVisible && (
        <Portal>
          <TextInputClose style={{ transform: [{ translateY }] }}>
            <Button
              onPress={Keyboard.dismiss}
              variant="outline"
              title="Fechar"
              size="xs"
            />
          </TextInputClose>
        </Portal>
      )}
    </TextInputContainer>
  );
}
