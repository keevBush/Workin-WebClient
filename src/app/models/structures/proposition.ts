import {Offre} from './offre';
import {DemandeurIdentite} from './demandeur-identite';
import {EmployeurIdentite} from './employeur-identite';

export class Proposition {
  id: string;
  offre: Offre;
  employeurIdentite: EmployeurIdentite;
  demandeursInteressees: Array<DemandeurIdentite>;
}
