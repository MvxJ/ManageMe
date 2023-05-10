import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectFormModel } from 'src/app/models/project-form.model';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent {
  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private projectService: ProjectService
  ) {}
  
  form!: FormGroup<ProjectFormModel>
  editorMode: boolean = false;
  projectKey: string = '';
  project: ProjectModel ={
    key: '',
    title: '',
    description: ''
  }

  ngOnInit(): void {
    this.projectKey = this.route.snapshot.params['id']
    this.editorMode = !this.projectKey;
    this.project = window.history.state;
    
    this.form = this.formBuilder.group({
      title: [
        this.project ? this.project.title : '', 
        [ 
          Validators.required, 
          Validators.minLength(3)
        ]
      ],
      description: [
        this.project ? this.project.description : '', 
        [ 
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
  }

  async saveProject() {
    const projectTitle = this.form.get('title')?.value;
    const projecDescription = this.form.get('description')?.value;

    if (projectTitle?.length && projecDescription) {
      this.project.description = projecDescription;
      this.project.title = projectTitle;
        
      this.projectService.updateProject(this.project);
      this.router.navigateByUrl(`/projects/detail/${this.project.key}`);
    }
  }

  async addProject() {
    const projectTitle = this.form.get('title')?.value;
    const projecDescription = this.form.get('description')?.value;

    if (projectTitle && projecDescription) {
      this.project.description = projecDescription;
      this.project.title = projectTitle;
        
      const respone = await this.projectService.addProject(this.project);
      this.router.navigateByUrl(`/projects/detail/${respone.id}`);
    }
  }
}
