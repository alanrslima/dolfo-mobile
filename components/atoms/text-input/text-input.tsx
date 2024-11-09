import { useState } from "react";
import { TextInputContainer, TextInputInput } from "./text-input.styles";

export function TextInput() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInputContainer>
      <TextInputInput
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        $isFocused={isFocused}
        placeholder="Teste"
      />
    </TextInputContainer>
  );
}
