import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonIcon, IonLabel, IonList, IonItem } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { schoolOutline, ribbonOutline, businessOutline, codeSlashOutline, handLeftOutline, linkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonIcon, IonLabel, IonList, IonItem],
})
export class Tab1Page {
  public studentName: string = 'Juan David Fierro Calderón';
  public career: string = 'Ingeniería de Software';
  public university: string = 'Universidad Surcolombiana';

  constructor() {
    addIcons({ schoolOutline, ribbonOutline, businessOutline, codeSlashOutline, handLeftOutline, linkOutline });
  }
}
