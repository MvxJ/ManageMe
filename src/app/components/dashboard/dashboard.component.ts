import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { faUsers, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private projectService: ProjectService,
    private functionalitiesService: FunctionalityService,
    private userService: UserService
  ) {}

  projectsCount: number = 0;
  tasksCount: number = 0;
  doneTasksCount: number = 0;
  functionalitiesCount: number = 0;
  doneFunctionalities: number = 0;
  userCount: number = 0;
  usersIcon = faUsers;
  projectsIcons = faProjectDiagram;
  pieChartCtx: CanvasRenderingContext2D | null = null;

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.userCount = users.length;
    });

    this.projectService.getProjects().subscribe((projects) => {
      this.projectsCount = projects.length;
    });

    this.taskService.getTasks().subscribe((tasks) => {
      this.tasksCount = tasks.length;
      const doneTasks = tasks.filter((task) => task.status == 'done');
      this.doneTasksCount = doneTasks.length;
    });

    this.functionalitiesService.getFunctionalities().subscribe((functionalities) => {
      this.functionalitiesCount = functionalities.length;
      const doneFunctionalities = functionalities.filter((functionality) => functionality.status == 'done');
      this.doneFunctionalities = doneFunctionalities.length;
    });
  }
}