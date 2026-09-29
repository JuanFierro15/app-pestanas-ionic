import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonAvatar, IonItem, IonLabel, IonIcon, IonBadge, IonButton } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { mailOutline, logoGithub, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonAvatar, IonItem, IonLabel, IonIcon, IonBadge, IonButton],
})
export class Tab3Page {
  public studentName: string = 'Juan David Fierro Calderón';
  public career: string = 'Ingeniería de Software';
  public email: string = 'juandafica19@gmail.com';
  public github: string = 'github.com/JuanFierro15';
  public city: string = 'Neiva, Huila';
  public isAvailable: boolean = true;

  constructor() {
    addIcons({ mailOutline, logoGithub, locationOutline });
  }

  public toggleStatus(): void {
    this.isAvailable = !this.isAvailable;
  }
}
