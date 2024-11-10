import { Button, Headline, Spacer, TextInput } from "@/components/atoms";
import { FormFooter } from "../pet-form.styles";
import { ScrollView } from "react-native";
import { useState } from "react";
import { ListItem } from "@/components/molecules";

type NameStepProps = {
  onGoBack: () => void;
  onSubmit: (value: string) => void;
};

export function NameStep(props: NameStepProps) {
  const [name, setName] = useState("");

  return (
    <>
      <ScrollView>
        <Headline title="Qual o nome do seu pet?" />
        <Spacer h={5} />
        <TextInput autoFocus onChangeText={setName} value={name} />
      </ScrollView>
      <FormFooter>
        <Button variant="link" onPress={props.onGoBack} title="Previous" />
        <Button
          title="Next"
          disabled={!name.trim().length}
          onPress={() => props.onSubmit(name)}
        />
      </FormFooter>
    </>
  );
}
