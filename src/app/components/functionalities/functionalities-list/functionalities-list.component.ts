import { Component, OnInit } from '@angular/core';
import { FunctionalityModel } from 'src/app/models/functionality.model';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-functionalities-list',
  templateUrl: './functionalities-list.component.html',
  styleUrls: ['./functionalities-list.component.scss']
})
export class FunctionalitiesListComponent implements OnInit {
  constructor(private functionalityService: FunctionalityService) {}
  functionalities: Array<FunctionalityModel> = [];
  displayAction = false;
  waitingFunctionalities: Array<FunctionalityModel> = [];
  doingFunctionalities: Array<FunctionalityModel> = [];
  doneFunctionalities: Array<FunctionalityModel> = [];

  ngOnInit() {
    this.functionalityService.getFunctionalities().subscribe((functionality) => {
      const selectedProjectKey = localStorage.getItem("selectedProject");
      const results = functionality.filter(functionality => functionality.projectKey == selectedProjectKey);
      this.functionalities = results;
      this.doneFunctionalities = this.functionalities.filter(functionality => functionality.status == 'done');
      this.doingFunctionalities = this.functionalities.filter(functionality => functionality.status == 'doing');
      this.waitingFunctionalities = this.functionalities.filter(functionality => functionality.status == 'onhold');
    });;

    const localUser = localStorage.getItem("user");

    if (localUser) {
      const user = JSON.parse(localUser);

      this.displayAction ?? user.role == 'devops';
    }
  }
}
