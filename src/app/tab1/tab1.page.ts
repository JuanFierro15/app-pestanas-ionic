import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonIcon, IonLabel, IonList, IonItem, IonToggle } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { schoolOutline, ribbonOutline, businessOutline, codeSlashOutline, handLeftOutline, linkOutline, sunnyOutline, moonOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonIcon, IonLabel, IonList, IonItem, IonToggle],
})
export class Tab1Page {
  public studentName: string = 'Juan David Fierro Calderón';
  public career: string = 'Ingeniería de Software';
  public university: string = 'Universidad Surcolombiana';

  public isDark: boolean = document.documentElement.classList.contains('ion-palette-dark');

  constructor() {
    addIcons({ schoolOutline, ribbonOutline, businessOutline, codeSlashOutline, handLeftOutline, linkOutline, sunnyOutline, moonOutline });
  }

  public toggleTheme(event: CustomEvent): void {
    this.isDark = event.detail.checked;
    document.documentElement.classList.toggle('ion-palette-dark', this.isDark);
  }
}
