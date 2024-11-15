import {
  PetService,
  RegisterPetInput,
} from "@/services/pets/contracts/pet-service";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDependencies } from "./dependency-context";
import { Pet } from "@/types/pet";

type PetsContextType = {
  myPets: Pet[];
  registerPet: (data: RegisterPetInput) => Promise<void>;
};

export const PetsContext = createContext<PetsContextType | null>(null);

export const PetsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [myPets, setMyPets] = useState<Pet[]>([]);
  const { petService } = useDependencies();
  const petServiceRef = useRef<PetService | null>(null);

  if (petServiceRef.current === null) {
    petServiceRef.current = petService;
  }

  async function fetchMyPets() {
    petServiceRef?.current?.listMyPets().then(setMyPets);
  }

  async function registerPet(data: RegisterPetInput) {
    await petServiceRef.current?.registerPet(data);
    fetchMyPets();
  }

  useEffect(() => {
    fetchMyPets();
  }, []);

  return (
    <PetsContext.Provider value={{ myPets, registerPet }}>
      {children}
    </PetsContext.Provider>
  );
};

export const usePets = () => {
  const context = useContext(PetsContext);
  if (!context) {
    throw new Error("useDependencies must be used within a DependencyProvider");
  }
  return context;
};
