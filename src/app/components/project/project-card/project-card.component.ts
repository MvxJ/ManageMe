import { Component, Input } from '@angular/core';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project: ProjectModel = {
    key: '',
    title: '',
    description: ''
  }
  images = [
    'assets/web-development.png',
    'assets/online-payment.png',
    'assets/analytics.png'
  ]
  randImage = this.images[Math.floor(Math.random() * (this.images.length))];
}
