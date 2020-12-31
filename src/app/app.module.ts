import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { AdminComponent } from './admin/admin.component';
import { InstructorComponent } from './instructor/instructor.component'

import { MatCardModule } from '@angular/material/card';
import { LessonComponent } from './lesson/lesson.component'
import { MatFormFieldModule } from '@angular/material/form-field'

import { HttpClientModule } from '@angular/common/http'

import { MatListModule } from '@angular/material/list'
import { FlexLayoutModule } from '@angular/flex-layout'

import { CookieService } from 'ngx-cookie-service'

import { MatSelectModule } from '@angular/material/select'

import { CngTabsModule } from '@codehint-ng/tabs';
import { AddWeeksComponent } from './add-weeks/add-weeks.component'

import { MatDialogModule } from '@angular/material/dialog'

import { MatTabsModule } from '@angular/material/tabs';
import { UploadComponent } from './upload/upload.component'
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    InstructorComponent,
    LessonComponent,
    AddWeeksComponent,
    VideoComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    MatListModule,
    FlexLayoutModule,
    MatSelectModule,
    CngTabsModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
