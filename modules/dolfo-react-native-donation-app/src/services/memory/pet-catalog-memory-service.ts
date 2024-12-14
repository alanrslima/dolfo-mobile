import {PetCatalogService} from '../contracts/pet-catalog-service';
import {PetDetail} from '../contracts/dtos/pet-detail';
import {PetResume} from '../contracts/dtos/pet-resume';

export class PetCatalogMemoryService implements PetCatalogService {
  async detail(id: string): Promise<PetDetail> {
    return {id: '1', name: 'Jack'};
  }

  async list(params: {page: number}): Promise<PetResume[]> {
    return [
      {
        id: '1',
        name: 'Bolt',
        about:
          'Um enérgico cachorro vira-lata de 2 anos, adora correr pelo parque e brincar com bolinhas. Bolt é carinhoso, cheio de vida e está sempre pronto para novas aventuras. Ideal para quem busca um amigo fiel e ativo.',
      },
      {
        id: '2',
        name: 'Mia',
        about:
          'Uma elegante gata siamesa de 3 anos, dona de olhos azuis hipnotizantes e personalidade independente. Adora sonecas no sol e receber carinhos na hora certa. Companheira perfeita para quem aprecia um pet calmo e sofisticado.',
      },
      {
        id: '3',
        name: 'Luna',
        about:
          'Uma curiosa calopsita amarela, de 1 ano, que encanta a todos com seus assobios e pequenas imitações. Luna adora socializar e explorar novos brinquedos, trazendo alegria e leveza ao ambiente.',
      },
    ];
  }
}
