import { Pet } from "@/types/pet";
import { PetService } from "./contracts/pet-service";

export class PetMemoryService implements PetService {
  private myPets: Pet[];

  constructor(mock?: Pet[]) {
    this.myPets = mock || [];
  }

  async listMyPets(): Promise<Pet[]> {
    return this.myPets;
  }

  async registerPet(input: {
    name: string;
    breed: string;
    specie: string;
  }): Promise<void> {
    this.myPets = [...this.myPets, { ...input, photos: [] }];
  }
}
