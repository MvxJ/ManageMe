import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionalityFormModel } from 'src/app/models/functionality-form.model';
import { FunctionalityModel } from 'src/app/models/functionality.model';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-functionality-form',
  templateUrl: './functionality-form.component.html',
  styleUrls: ['./functionality-form.component.scss']
})
export class FunctionalityFormComponent {
  constructor(
    private route: ActivatedRoute, 
    private projectService: ProjectService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private functionalityService: FunctionalityService,
    private router: Router
  ) {}
 
  functionalityKey = null;
  editorMode = false;
  workingProjectKey = localStorage.getItem("selectedProject");
  projects: any;
  users: any;
  form!: FormGroup<FunctionalityFormModel>
  functionality: FunctionalityModel = {
    description: '',
    key: '',
    owner: '',
    projectKey: '',
    priority: '',
    status: '',
    title: ''
  }

  ngOnInit() {
    this.functionalityKey = this.route.snapshot.params['id']
    this.editorMode = !this.functionalityKey;
    this.functionality = window.history.state;
    this.projectService.getProjects().subscribe((project) => {
      this.projects = project;
    });
    this.userService.getUsers().subscribe((user) => {
      this.users = user;
    });;

    this.form = this.formBuilder.group({
      title: [
        this.functionality ? this.functionality.title : '',
        [
          Validators.required,
        ]
      ],
      description: [
        this.functionality ? this.functionality.description : '',
        [
          Validators.required,
        ]
      ],
      owner: [
        this.functionality ? this.functionality.owner : '',
        [
          Validators.required,
        ]
      ],
      project: [
        this.functionality ? this.functionality.projectKey : '',
        [
          Validators.required,
        ]
      ],
      priority: [
        this.functionality ? this.functionality.priority : '',
        [
          Validators.required,
        ]
      ],
    });
  }

  async saveFunctionality() {

  }

  async addFunctionality() {
    const title = this.form.get('title')?.value;;
    const description = this.form.get('description')?.value;;
    const owner = this.form.get('owner')?.value;;
    const project = this.form.get('project')?.value;;
    const priority = this.form.get('priority')?.value;;

    if (title) {
      this.functionality.title = title;
    }

    if (description) {
      this.functionality.description = description;
    }

    if (owner) {
      this.functionality.owner = owner;
    }

    if (project) {
      this.functionality.projectKey = project;
    }

    if (priority) {
      this.functionality.priority = priority;
    }

    this.functionality.status = 'onhold';

    const respone = await this.functionalityService.addFunctionality(this.functionality);
    this.router.navigateByUrl(`/functionalities/detail/${respone.id}`);
  }
}
