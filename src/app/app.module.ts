import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LocalTaskService } from "./services/local-task.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { CommonModule } from "@angular/common";
import { AppRoutingModule } from ".//app-routing.module";
import { NewTaskComponent } from "./pages/new-task/new-task.component";
import { EditTaskComponent } from "./pages/edit-task/edit-task.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./pages/home/home.component";
import { IsDonePipe } from "./pipes/is-done.pipe";
import { MatComponentsModule } from "./mat-components/mat-components.module";
import { TestRestComponent } from './pages/test-rest/test-rest.component';


@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    EditTaskComponent,
    HomeComponent,
    IsDonePipe,
    TestRestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatComponentsModule
  ],
  providers: [LocalTaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
