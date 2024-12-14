import {PetCatalogService} from '../contracts/pet-catalog-service';
import {PetDetail} from '../contracts/dtos/pet-detail';
import {PetResume} from '../contracts/dtos/pet-resume';

export class PetCatalogHttpService implements PetCatalogService {
  async detail(id: string): Promise<PetDetail> {
    return {id: '1', name: 'Jack'};
  }

  async list(params: {page: number}): Promise<PetResume[]> {
    return [
      {id: '1', name: 'Jack'},
      {id: '2', name: 'Bob'},
      {id: '3', name: 'Billy'},
    ];
  }
}
