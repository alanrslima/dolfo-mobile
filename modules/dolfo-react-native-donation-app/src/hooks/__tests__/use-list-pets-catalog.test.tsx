 import {expect, it} from '@jest/globals';

 it.skip('should create tests')

// import React from 'react';
// import {expect, it} from '@jest/globals';
// import {waitFor} from '@testing-library/react-native';
// import {useListPetsCatalog} from '../use-list-pets-catalog';
// import {ServiceDependenciesProvider} from '../../contexts/service-dependencies';
// import {PetCatalogMemoryService} from '../../services/memory/pet-catalog-memory-service';

// const Providers: React.FC<{children: React.ReactNode}> = ({children}) => {
//   const petCatalogMemoryService = new PetCatalogMemoryService();

//   return (
//     <ServiceDependenciesProvider petCatalogService={petCatalogMemoryService}>
//       {children}
//     </ServiceDependenciesProvider>
//   );
// };

// it('should list pets catalog', async () => {
//   const {result} = renderHook(() => useListPetsCatalog(), {
//     wrapper: Providers,
//   });
//   await waitFor(() => expect(result.current.catalog).toHaveLength(1));
// });

// it('should load more pets catalog', async () => {
//   const {result} = renderHook(() => useListPetsCatalog(), {
//     wrapper: Providers,
//   });
//   await waitFor(() => expect(result.current.catalog).toHaveLength(1));
//   act(() => {
//     result.current.loadMore();
//   });
//   await waitFor(() => expect(result.current.catalog).toHaveLength(2));
// });

// it('should return isLoading state', async () => {
//   const {result} = renderHook(() => useListPetsCatalog(), {
//     wrapper: Providers,
//   });
//   await waitFor(() => expect(result.current.isLoading).toBeTruthy());
//   await waitFor(() => expect(result.current.isLoading).not.toBeTruthy());
// });
