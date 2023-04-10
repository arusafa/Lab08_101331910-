import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { StudentsComponent } from './students.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [StudentsComponent]
})
export class AppModule { }
