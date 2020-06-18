import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { AssignComponent } from './assign/assign.component';
import { StudentComponent } from './student/student.component';
import { MentorComponent } from './mentor/mentor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MentorComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'assign',
    component: AssignComponent,
  },
  {
    path: 'update',
    component: UpdateComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
