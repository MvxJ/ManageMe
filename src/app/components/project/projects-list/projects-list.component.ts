import { Component } from '@angular/core';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  projects: Array<ProjectModel> = [
    {
      key: 'gh0fe4',
      title: 'Example dashboard project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend elementum justo et rutrum. Cras eu posuere turpis. Sed imperdiet nibh et auctor ultricies. Aenean consequat felis et convallis ultrices. Aliquam elit felis, congue nec sem vitae, varius cursus quam. Etiam tincidunt dictum erat porttitor molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec laoreet est quis erat vehicula ultrices. Nulla rhoncus auctor libero eget interdum. Phasellus bibendum ante id leo dictum, nec pretium purus vehicula. Vestibulum ante odio, congue ac mi ornare, pellentesque porttitor ante. Fusce pharetra sapien eu risus elementum faucibus. Pellentesque sit amet viverra ex, sed lobortis felis. Nam tincidunt dapibus turpis, vel suscipit nulla. Aenean ultricies urna lacus, et hendrerit mi vestibulum a. Duis lobortis magna vitae purus mollis hendrerit.'
    },
    {
      key: 'gh0fe6',
      title: 'Example firebase project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend elementum justo et rutrum. Cras eu posuere turpis. Sed imperdiet nibh et auctor ultricies. Aenean consequat felis et convallis ultrices. Aliquam elit felis, congue nec sem vitae, varius cursus quam. Etiam tincidunt dictum erat porttitor molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec laoreet est quis erat vehicula ultrices. Nulla rhoncus auctor libero eget interdum. Phasellus bibendum ante id leo dictum, nec pretium purus vehicula. Vestibulum ante odio, congue ac mi ornare, pellentesque porttitor ante. Fusce pharetra sapien eu risus elementum faucibus. Pellentesque sit amet viverra ex, sed lobortis felis. Nam tincidunt dapibus turpis, vel suscipit nulla. Aenean ultricies urna lacus, et hendrerit mi vestibulum a. Duis lobortis magna vitae purus mollis hendrerit.'
    },
    {
      key: 'gh0fe4',
      title: 'Example dashboard project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend elementum justo et rutrum. Cras eu posuere turpis. Sed imperdiet nibh et auctor ultricies. Aenean consequat felis et convallis ultrices. Aliquam elit felis, congue nec sem vitae, varius cursus quam. Etiam tincidunt dictum erat porttitor molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec laoreet est quis erat vehicula ultrices. Nulla rhoncus auctor libero eget interdum. Phasellus bibendum ante id leo dictum, nec pretium purus vehicula. Vestibulum ante odio, congue ac mi ornare, pellentesque porttitor ante. Fusce pharetra sapien eu risus elementum faucibus. Pellentesque sit amet viverra ex, sed lobortis felis. Nam tincidunt dapibus turpis, vel suscipit nulla. Aenean ultricies urna lacus, et hendrerit mi vestibulum a. Duis lobortis magna vitae purus mollis hendrerit.'
    },
    {
      key: 'gh0fe6',
      title: 'Example firebase project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend elementum justo et rutrum. Cras eu posuere turpis. Sed imperdiet nibh et auctor ultricies. Aenean consequat felis et convallis ultrices. Aliquam elit felis, congue nec sem vitae, varius cursus quam. Etiam tincidunt dictum erat porttitor molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec laoreet est quis erat vehicula ultrices. Nulla rhoncus auctor libero eget interdum. Phasellus bibendum ante id leo dictum, nec pretium purus vehicula. Vestibulum ante odio, congue ac mi ornare, pellentesque porttitor ante. Fusce pharetra sapien eu risus elementum faucibus. Pellentesque sit amet viverra ex, sed lobortis felis. Nam tincidunt dapibus turpis, vel suscipit nulla. Aenean ultricies urna lacus, et hendrerit mi vestibulum a. Duis lobortis magna vitae purus mollis hendrerit.'
    },
    {
      key: 'gh0fe4',
      title: 'Example dashboard project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend elementum justo et rutrum. Cras eu posuere turpis. Sed imperdiet nibh et auctor ultricies. Aenean consequat felis et convallis ultrices. Aliquam elit felis, congue nec sem vitae, varius cursus quam. Etiam tincidunt dictum erat porttitor molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec laoreet est quis erat vehicula ultrices. Nulla rhoncus auctor libero eget interdum. Phasellus bibendum ante id leo dictum, nec pretium purus vehicula. Vestibulum ante odio, congue ac mi ornare, pellentesque porttitor ante. Fusce pharetra sapien eu risus elementum faucibus. Pellentesque sit amet viverra ex, sed lobortis felis. Nam tincidunt dapibus turpis, vel suscipit nulla. Aenean ultricies urna lacus, et hendrerit mi vestibulum a. Duis lobortis magna vitae purus mollis hendrerit.'
    },
    {
      key: 'gh0fe6',
      title: 'Example firebase project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend elementum justo et rutrum. Cras eu posuere turpis. Sed imperdiet nibh et auctor ultricies. Aenean consequat felis et convallis ultrices. Aliquam elit felis, congue nec sem vitae, varius cursus quam. Etiam tincidunt dictum erat porttitor molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec laoreet est quis erat vehicula ultrices. Nulla rhoncus auctor libero eget interdum. Phasellus bibendum ante id leo dictum, nec pretium purus vehicula. Vestibulum ante odio, congue ac mi ornare, pellentesque porttitor ante. Fusce pharetra sapien eu risus elementum faucibus. Pellentesque sit amet viverra ex, sed lobortis felis. Nam tincidunt dapibus turpis, vel suscipit nulla. Aenean ultricies urna lacus, et hendrerit mi vestibulum a. Duis lobortis magna vitae purus mollis hendrerit.'
    }
  ]
}
