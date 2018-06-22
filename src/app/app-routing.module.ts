import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewTaskComponent } from "./pages/new-task/new-task.component";
import { EditTaskComponent } from "./pages/edit-task/edit-task.component";
import { HomeComponent } from "./pages/home/home.component";
import {TestRestComponent} from "./pages/test-rest/test-rest.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "new-task", component: NewTaskComponent },
  { path: "edit-task/:id", component: EditTaskComponent },
  { path: "test-rest", component: TestRestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
