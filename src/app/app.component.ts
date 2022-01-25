import { Component } from '@angular/core';
import { Statistiques } from './models/statistiques.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabStatistiques: Statistiques[];

  constructor() {
    let chiens = new Statistiques('chiens', 'dyftvuyhibjkl', 60);
    let chats = new Statistiques('chats', 'dfghuhijo', 80);

    this.tabStatistiques = [chiens, chats];
  }
}
