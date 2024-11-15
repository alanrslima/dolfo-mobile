import { NavBarHeader, Screen } from "@/components";
import { PetForm, PetFormSubmitData } from "@/components/forms";
import { usePets } from "@/hooks/use-pets";
import { router } from "expo-router";

export default function AddPet() {
  const { registerPet } = usePets();

  async function onSubmit(data: PetFormSubmitData) {
    await registerPet(data);
    router.back();
  }

  return (
    <Screen useBottomSafeArea header={<NavBarHeader />}>
      <PetForm onSubmit={onSubmit} />
    </Screen>
  );
}
