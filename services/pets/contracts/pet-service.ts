import { Pet } from "@/types/pet";

export interface PetService {
  listMyPets(): Promise<Pet[]>;
  registerPet(input: RegisterPetInput): Promise<void>;
}

export type RegisterPetInput = {
  name: string;
  breed: string;
  specie: string;
};
