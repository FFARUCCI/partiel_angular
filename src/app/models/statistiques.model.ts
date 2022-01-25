import { TimeoutError } from 'rxjs';

export class Statistiques {
  private identifiant: string;
  private titre: string;
  private valeur: number;

  constructor(identifiant: string, titre: string, valeur: number) {
    this.identifiant = identifiant;
    this.titre = titre;
    this.valeur = valeur;
  }
}
