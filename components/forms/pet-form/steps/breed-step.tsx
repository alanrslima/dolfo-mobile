import { Button, Headline, Spacer } from "@/components/atoms";
import { ListPicker, SegmentedButtons } from "@/components/molecules";
import { useState } from "react";
import { FormFooter } from "../pet-form.styles";
import styled from "styled-components/native";

const options = [
  { label: "Affenpinscher", value: "affenpinscher" },
  { label: "Afghan Hound", value: "afghan_hound" },
  { label: "Airedale Terrier", value: "airedale_terrier" },
  { label: "Akita", value: "akita" },
  { label: "Alaskan Malamute", value: "alaskan_malamute" },
  { label: "American Bulldog", value: "american_bulldog" },
  { label: "American Cocker Spaniel", value: "american_cocker_spaniel" },
  { label: "American Pit Bull Terrier", value: "american_pit_bull_terrier" },
  {
    label: "American Staffordshire Terrier",
    value: "american_staffordshire_terrier",
  },
  { label: "Australian Cattle Dog", value: "australian_cattle_dog" },
  { label: "Australian Shepherd", value: "australian_shepherd" },
  { label: "Australian Terrier", value: "australian_terrier" },
  { label: "Basenji", value: "basenji" },
  { label: "Basset Hound", value: "basset_hound" },
  { label: "Beagle", value: "beagle" },
  { label: "Bearded Collie", value: "bearded_collie" },
  { label: "Bedlington Terrier", value: "bedlington_terrier" },
  { label: "Bernese Mountain Dog", value: "bernese_mountain_dog" },
  { label: "Bichon Frisé", value: "bichon_frise" },
  { label: "Bloodhound", value: "bloodhound" },
  { label: "Border Collie", value: "border_collie" },
  { label: "Border Terrier", value: "border_terrier" },
  { label: "Boston Terrier", value: "boston_terrier" },
  { label: "Boxer", value: "boxer" },
  { label: "Bull Terrier", value: "bull_terrier" },
  { label: "Bulldog", value: "bulldog" },
  { label: "Bullmastiff", value: "bullmastiff" },
  { label: "Cairn Terrier", value: "cairn_terrier" },
  { label: "Cane Corso", value: "cane_corso" },
  {
    label: "Cavalier King Charles Spaniel",
    value: "cavalier_king_charles_spaniel",
  },
  { label: "Chihuahua", value: "chihuahua" },
  { label: "Chinese Crested Dog", value: "chinese_crested_dog" },
  { label: "Chow Chow", value: "chow_chow" },
  { label: "Cocker Spaniel", value: "cocker_spaniel" },
  { label: "Collie", value: "collie" },
  { label: "Dachshund", value: "dachshund" },
  { label: "Dalmatian", value: "dalmatian" },
  { label: "Doberman Pinscher", value: "doberman_pinscher" },
  { label: "Dogo Argentino", value: "dogo_argentino" },
  { label: "Dogue de Bordeaux", value: "dogue_de_bordeaux" },
  { label: "English Bulldog", value: "english_bulldog" },
  { label: "English Cocker Spaniel", value: "english_cocker_spaniel" },
  { label: "English Mastiff", value: "english_mastiff" },
  { label: "English Setter", value: "english_setter" },
  { label: "English Springer Spaniel", value: "english_springer_spaniel" },
  { label: "Fox Terrier", value: "fox_terrier" },
  { label: "French Bulldog", value: "french_bulldog" },
  { label: "German Pinscher", value: "german_pinscher" },
  { label: "German Shepherd", value: "german_shepherd" },
  { label: "German Shorthaired Pointer", value: "german_shorthaired_pointer" },
  { label: "Golden Retriever", value: "golden_retriever" },
  { label: "Great Dane", value: "great_dane" },
  { label: "Greyhound", value: "greyhound" },
  { label: "Havanese", value: "havanese" },
  { label: "Irish Setter", value: "irish_setter" },
  { label: "Irish Terrier", value: "irish_terrier" },
  { label: "Irish Wolfhound", value: "irish_wolfhound" },
  { label: "Italian Greyhound", value: "italian_greyhound" },
  { label: "Jack Russell Terrier", value: "jack_russell_terrier" },
  { label: "Japanese Chin", value: "japanese_chin" },
  { label: "Labrador Retriever", value: "labrador_retriever" },
  { label: "Lhasa Apso", value: "lhasa_apso" },
  { label: "Maltese", value: "maltese" },
  { label: "Miniature Pinscher", value: "miniature_pinscher" },
  { label: "Neapolitan Mastiff", value: "neapolitan_mastiff" },
  { label: "Newfoundland", value: "newfoundland" },
  { label: "Norfolk Terrier", value: "norfolk_terrier" },
  { label: "Norwegian Elkhound", value: "norwegian_elkhound" },
  { label: "Old English Sheepdog", value: "old_english_sheepdog" },
  { label: "Papillon", value: "papillon" },
  { label: "Pekingese", value: "pekingese" },
  { label: "Pembroke Welsh Corgi", value: "pembroke_welsh_corgi" },
  { label: "Pit Bull", value: "pit_bull" },
  { label: "Pointer", value: "pointer" },
  { label: "Pomeranian", value: "pomeranian" },
  { label: "Poodle", value: "poodle" },
  { label: "Portuguese Water Dog", value: "portuguese_water_dog" },
  { label: "Pug", value: "pug" },
  { label: "Rottweiler", value: "rottweiler" },
  { label: "Saint Bernard", value: "saint_bernard" },
  { label: "Samoyed", value: "samoyed" },
  { label: "Scottish Terrier", value: "scottish_terrier" },
  { label: "Shar Pei", value: "shar_pei" },
  { label: "Shiba Inu", value: "shiba_inu" },
  { label: "Shih Tzu", value: "shih_tzu" },
  { label: "Siberian Husky", value: "siberian_husky" },
  { label: "Staffordshire Bull Terrier", value: "staffordshire_bull_terrier" },
  { label: "Weimaraner", value: "weimaraner" },
  { label: "Welsh Corgi", value: "welsh_corgi" },
  {
    label: "West Highland White Terrier",
    value: "west_highland_white_terrier",
  },
  { label: "Whippet", value: "whippet" },
  { label: "Yorkshire Terrier", value: "yorkshire_terrier" },
];

type SpecieStepProps = {
  onSubmit: (specie: string) => void;
  onGoBack: () => void;
};

const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 24 },
})``;

export function BreedStep(props: SpecieStepProps) {
  const [breed, setBreed] = useState("");

  return (
    <>
      <Scroll>
        <Headline title="Pick the breed of your Pet" />
        <Spacer h={5} />
        <SegmentedButtons
          buttons={options}
          onValueChange={setBreed}
          value={breed}
        />
      </Scroll>

      <FormFooter>
        <Button onPress={props.onGoBack} variant="link" title="Previous" />
        <Button title="Next" onPress={() => props.onSubmit(breed)} />
      </FormFooter>
    </>
  );
}
