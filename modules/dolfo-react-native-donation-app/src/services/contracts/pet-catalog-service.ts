import {PetDetail} from './dtos/pet-detail';
import {PetResume} from './dtos/pet-resume';

export interface PetCatalogService {
  list(params: {page: number}): Promise<PetResume[]>;
  detail(id: string): Promise<PetDetail>;
}
