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
  
  ngOnInit() {
    this.functionalityService.getFunctionalities().subscribe((functionality) => {
      this.functionalities = functionality;
    });;
  }
}
