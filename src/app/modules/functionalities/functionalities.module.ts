import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FunctionalitiesDashboardComponent } from "src/app/components/functionalities/functionalities-dashboard/functionalities-dashboard.component";
import { FunctionalitiesListComponent } from "src/app/components/functionalities/functionalities-list/functionalities-list.component";
import { FunctionalityDetailComponent } from "src/app/components/functionalities/functionality-detail/functionality-detail.component";
import { FunctionalityFormComponent } from "src/app/components/functionalities/functionality-form/functionality-form.component";

const routes: Routes = [
  {
    path: '',
    component: FunctionalitiesDashboardComponent,
    children: [
      {path: '', component: FunctionalitiesListComponent},
      {path: 'detail/:id', component: FunctionalityDetailComponent},
      {path: 'add', component: FunctionalityFormComponent},
      {path: 'edit/:id', component: FunctionalityFormComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class FunctionalitiesModule { }
