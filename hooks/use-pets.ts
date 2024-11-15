import { PetsContext } from "@/contexts/pets-context";
import { useContext } from "react";

export const usePets = () => {
  const context = useContext(PetsContext);
  if (!context) {
    throw new Error("useDependencies must be used within a DependencyProvider");
  }
  return context;
};
