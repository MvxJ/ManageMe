import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FunctionalityModel } from 'src/app/models/functionality.model';
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
    private userService: UserService
  ) {}
 
  functionalityKey = null;
  editorMode = false;
  workingProjectKey = localStorage.getItem("selectedProject");
  projects: any;
  users: any;
  functionality: FunctionalityModel = {
    description: '',
    key: '',
    owner: '',
    projectKey: '',
    priority: '',
    status: '',
    title: ''
  }

  async ngOnInit() {
    this.functionalityKey = this.route.snapshot.params['id']
    this.editorMode = !this.functionalityKey;
    this.functionality = window.history.state;
    await this.projectService.getProjects().subscribe((project) => {
      this.projects = project;
    });
    await this.userService.getUsers().subscribe((user) => {
      this.users = user;
   });;
  }

  saveFunctionality() {

  }

  addFunctionality() {
    
  }

}
