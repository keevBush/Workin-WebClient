import {Genre} from './genre.enum';

export class DemandeurIdentite {
  id: string;
  nom: string;
  postnom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  username: string;
  adresse: string;
  telephone: string;
  nationalite: string;
  genre: Genre;
  naissance: Date ;
  langues: Array<string>;
  aPropos: string;
  localisation: string;
}

