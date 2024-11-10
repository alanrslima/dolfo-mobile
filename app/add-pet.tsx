import { NavBarHeader, Screen } from "@/components";
import { PetForm } from "@/components/forms";
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default function AddPet() {
  async function onSubmitPet() {}

  return (
    <Screen useBottomSafeArea header={<NavBarHeader />}>
      <PetForm onSubmit={onSubmitPet} />
    </Screen>
  );
}
