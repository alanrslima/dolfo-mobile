import { PetService } from "@/services/pets/contracts/pet-service";
import React, { createContext, useContext, useRef } from "react";

type DependencyContextType = {
  petService: PetService;
  logger: (message: string) => void;
};

const DependencyContext = createContext<DependencyContextType | null>(null);

export const DependencyProvider: React.FC<{
  petService: PetService;
  children: React.ReactNode;
}> = ({ petService, children }) => {
  const logger = (message: string) => console.log(message);

  return (
    <DependencyContext.Provider value={{ petService, logger }}>
      {children}
    </DependencyContext.Provider>
  );
};

export const useDependencies = () => {
  const context = useContext(DependencyContext);
  if (!context) {
    throw new Error("useDependencies must be used within a DependencyProvider");
  }
  return context;
};
