import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent implements OnInit {
  @Input() status: string = '';
  label = '';
  bgColor = '';

  ngOnChanges(changes: any) {
    this.adjustLabel()
  }

  ngOnInit(): void {
    this.adjustLabel()
  }

  adjustLabel() {
    switch (this.status) {
      case 'onhold':
        this.label = 'Waiting'
        this.bgColor = '#ffbb33'
        break;
      case 'doing':
        this.label = 'In Progress'
        this.bgColor = '#33b5e5'
        break;
      case 'done':
        this.label = 'Done'
        this.bgColor = '#00C851'
        break;
    }
  }
}
