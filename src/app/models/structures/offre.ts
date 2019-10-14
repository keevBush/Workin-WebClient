import {TypeOffre} from './type-offre.enum';

export class Offre {
  id: string ;
  typeOffre: TypeOffre;
  nomPoste: string;
  pays: string;
  ville: string;
  description: string;
  details: string;
  deadline: Date ;
  maxParticipant: number;
  competences: Array<string>;
  minimumDetails: string;
}
