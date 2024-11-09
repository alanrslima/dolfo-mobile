import {
  Button,
  Headline,
  ListPicker,
  MultiStepForm,
  MultiStepFormHandle,
  NavBarHeader,
  Screen,
  TextInput,
} from "@/components";
import { useRef, useState } from "react";
import styled from "styled-components/native";

function SpecieStep() {
  const [specie, setSpecie] = useState("dog");

  return (
    <>
      <ListPicker
        ListHeaderComponent={<Headline title="Select the Spaike specie" />}
        onChangeValue={setSpecie}
        value={specie}
        data={[
          { value: "dog", icon: "dog", label: "Cachorro" },
          { value: "cat", icon: "cat", label: "Gato" },
          { value: "bird", icon: "bird", label: "Pássaro" },
          { value: "fish", icon: "fish", label: "Peixe" },
          { value: "hamster", icon: "dog", label: "Hamster" },
          { value: "rabbit", icon: "rabbit", label: "Coelho" },
          { value: "guinea_pig", icon: "pig", label: "Porquinho-da-índia" },
          { value: "turtle", icon: "turtle", label: "Tartaruga" },
          { value: "ferret", icon: "dog", label: "Furão" },
          { value: "parrot", icon: "bird", label: "Papagaio" },
          { value: "canary", icon: "bird", label: "Canário" },
          { value: "lovebird", icon: "bird", label: "Periquito" },
          { value: "iguana", icon: "dog", label: "Iguana" },
          { value: "gecko", icon: "dog", label: "Lagartixa-leopardo" },
          { value: "snake", icon: "snake", label: "Cobra" }, // somente espécies permitidas
          { value: "hedgehog", icon: "dog", label: "Ouriço" }, // com autorização específica
        ]}
      />
    </>
  );
}

function NameStep() {
  return (
    <>
      <Headline title="What is your pet name?" />
      <TextInput />
    </>
  );
}

export const FormFooter = styled.View`
  padding: ${({ theme }) => theme.spaces[4]} ${({ theme }) => theme.spaces[7]};
  border-top-width: 1px;
  flex-direction: row;
  border-top-color: ${({ theme }) => theme.colors.border};
  justify-content: space-between;
`;

export default function AddPet() {
  const multiStepFormRef = useRef<MultiStepFormHandle>(null);

  return (
    <Screen header={<NavBarHeader />} useBottomSafeArea>
      <MultiStepForm
        ref={multiStepFormRef}
        steps={[
          { id: "1", content: <NameStep /> },
          { id: "2", content: <SpecieStep /> },
        ]}
      />
      <FormFooter>
        <Button
          variant="link"
          title="Previous"
          onPress={() => multiStepFormRef.current?.previous()}
        />
        <Button title="Next" onPress={() => multiStepFormRef.current?.next()} />
      </FormFooter>
    </Screen>
  );
}
