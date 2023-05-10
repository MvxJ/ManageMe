import { Component } from '@angular/core';
import { ProjectModel } from 'src/app/models/project.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  constructor(
    private route: ActivatedRoute, 
    private projectService: ProjectService, 
    private router: Router
  ) {

  }

  project: ProjectModel = {
    description: '',
    key: '',
    title: ''
  };
  editIcon = faEdit;
  deleteIcon = faTrash;

  ngOnInit() {
      const projectKey = this.route.snapshot.params['id'];
      const projects = this.projectService.getProjects().subscribe(projects => {
        const result = projects.filter(project => project.key == projectKey)
        this.project = result[0];
      })    
  }

  deleteProject() {
    if (this.project) {
      this.projectService.deleteProject(this.project);
      this.router.navigateByUrl('/projects');
    }
  }
}