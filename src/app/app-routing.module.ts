import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { InstructorComponent } from './instructor/instructor.component';
import { LessonComponent } from './lesson/lesson.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', component: InstructorComponent },
  { path: 'admin', component: AdminComponent },
  { path: ':id', component: LessonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
