import React, {createContext, ReactNode, useRef} from 'react';
import {PetCatalogService} from '../services/contracts/pet-catalog-service';

type ServiceDependenciesContextProps = {
  petCatalogService: PetCatalogService | null;
};

type ServiceDependenciesProviderProps = {
  petCatalogService: PetCatalogService;
  children: ReactNode;
};

export const ServiceDependenciesContext =
  createContext<ServiceDependenciesContextProps>(
    {} as ServiceDependenciesContextProps,
  );

export function ServiceDependenciesProvider({
  children,
  petCatalogService,
}: ServiceDependenciesProviderProps) {
  const petCatalogServiceRef = useRef<PetCatalogService | null>(null);

  if (petCatalogServiceRef.current === null) {
    petCatalogServiceRef.current = petCatalogService;
  }

  return (
    <ServiceDependenciesContext.Provider
      value={{petCatalogService: petCatalogServiceRef.current}}>
      {children}
    </ServiceDependenciesContext.Provider>
  );
}
