import { Component } from '@angular/core';
import { HistoryService } from './services/history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ManageMe';

  constructor (public history: HistoryService) {
    this.history.startSaveHistory()
  }
}
