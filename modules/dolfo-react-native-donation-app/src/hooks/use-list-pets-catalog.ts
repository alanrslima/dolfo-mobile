import {useEffect, useRef, useState} from 'react';
import {PetResume} from '../services/contracts/dtos/pet-resume';
import {useServiceDependencies} from './use-service-dependencies';

export function useListPetsCatalog() {
  const [catalog, setCatalog] = useState<PetResume[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const pageRef = useRef<number>(0);
  const {petCatalogService} = useServiceDependencies();

  useEffect(() => {
    setIsLoading(true);
    petCatalogService
      ?.list({page: pageRef.current})
      .then(setCatalog)
      .finally(() => setIsLoading(false));
  }, [petCatalogService]);

  function loadMore() {
    setIsLoadingMore(true);
    pageRef.current += 1;
    petCatalogService
      ?.list({page: pageRef.current})
      .then(data => setCatalog(prev => [...prev, ...data]))
      .finally(() => setIsLoadingMore(false));
  }

  return {catalog, isLoading, isLoadingMore, loadMore};
}
