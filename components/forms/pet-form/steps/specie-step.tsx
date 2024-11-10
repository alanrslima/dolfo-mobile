import { Button, Headline } from "@/components/atoms";
import { ListPicker } from "@/components/molecules";
import { useState } from "react";
import { FormFooter } from "../pet-form.styles";

type SpecieStepProps = {
  onSubmit: (specie: string) => void;
  onGoBack: () => void;
  petName: string;
};

export function SpecieStep(props: SpecieStepProps) {
  const [specie, setSpecie] = useState("dog");

  return (
    <>
      <ListPicker
        ListHeaderComponent={
          <Headline
            title={`Muito bem! Qual é a espécie de ${props.petName}?`}
          />
        }
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
      <FormFooter>
        <Button onPress={props.onGoBack} variant="link" title="Previous" />
        <Button title="Next" onPress={() => props.onSubmit(specie)} />
      </FormFooter>
    </>
  );
}
