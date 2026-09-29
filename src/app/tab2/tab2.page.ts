import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton]
})
export class Tab2Page {
  public counter: number = 0;

  constructor() {}

  public increase(): void {
    this.counter++;
  }

  public decrease(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
