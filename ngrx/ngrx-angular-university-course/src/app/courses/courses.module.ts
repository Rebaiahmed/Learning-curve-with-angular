import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseCardListComponent } from './course-card-list/course-card-list.component';
import { EditCourseDialogComponent } from './edit-course-dialog/edit-course-dialog.component';



@NgModule({
  declarations: [
    HomeComponent,
    CourseComponent,
    CourseCardListComponent,
    EditCourseDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
