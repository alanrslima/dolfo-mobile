import { MultiStepForm, MultiStepFormHandle } from "@/components";
import { useRef, useState } from "react";
import { NameStep, SpecieStep, BreedStep, PhotosStep } from "./steps";

export type PetFormSubmitData = {
  name: string;
  specie: string;
  breed: string;
};

export type PetFormProps = {
  onSubmit: (values: PetFormSubmitData) => Promise<void>;
};

export function PetForm(props: PetFormProps) {
  const multiStepFormRef = useRef<MultiStepFormHandle>(null);
  const [name, setName] = useState("");
  const [specie, setSpecie] = useState("");
  const [breed, setBreed] = useState("");

  function next() {
    multiStepFormRef.current?.next();
  }

  function previous() {
    multiStepFormRef.current?.previous();
  }

  function onSubmitName(value: string) {
    setName(value);
    next();
  }

  function onSubmitSpecie(value: string) {
    setSpecie(value);
    next();
  }

  function onSubmitBreed(value: string) {
    setSpecie(value);
    next();
  }

  function onSubmitPhoto() {
    props.onSubmit({ breed, name, specie });
  }

  return (
    <>
      <MultiStepForm
        ref={multiStepFormRef}
        steps={[
          {
            id: "1",
            content: <NameStep onGoBack={previous} onSubmit={onSubmitName} />,
          },
          {
            id: "2",
            content: (
              <SpecieStep
                onGoBack={previous}
                petName={name}
                onSubmit={onSubmitSpecie}
              />
            ),
          },
          {
            id: "3",
            content: (
              <BreedStep onGoBack={previous} onSubmit={onSubmitSpecie} />
            ),
          },
          {
            id: "4",
            content: (
              <PhotosStep onGoBack={previous} onSubmit={onSubmitPhoto} />
            ),
          },
        ]}
      />
    </>
  );
}
