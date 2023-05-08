import { Component } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {
  backIcon = faArrowLeft;

  constructor(private history: HistoryService) {}
 
  goBack(): void {
    this.history.goBack()
  }

  historyLength = this.history.getHistory().length
}
