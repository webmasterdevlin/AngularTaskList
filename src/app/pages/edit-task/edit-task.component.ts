import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalTaskService } from "../../services/local-task.service";
import { Task } from "../../models/task";
import { MatSnackBar } from "@angular/material";
import { Subscription } from "rxjs/Subscription";
import { FirebaseTaskService } from "../../services/firebase-task.service";

@Component({
  selector: "app-edit-task",
  templateUrl: "./edit-task.component.html",
  styleUrls: ["./edit-task.component.css"]
})
export class EditTaskComponent implements OnInit {
  private _router: Router;
  color = "accent";
  checked: boolean;
  disabled = false;
  Task: Task;
  EditCalendar: Date;
  disabledButton = false;

  constructor(
    private _localTaskService: LocalTaskService,
    private _activatedRoute: ActivatedRoute,
    private _fbTaskService: FirebaseTaskService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    let id: string = this._activatedRoute.snapshot.paramMap.get("id");
    console.log("Activated Route: ", id);
    this.getTask(id);
  }

  getTask(id: string) {
    //   this._localTaskService.getTask(id).subscribe(data => {
    this._fbTaskService.getTask(id).subscribe(data => {
      this.Task = data;
      this.checked = this.Task.isDone;
      this.EditCalendar = this.Task.deadLine;
    });
  }

  OnDone() {
    this.checked = !this.checked;
  }

  onUpdateTask() {
    this.Task.deadLine = this.EditCalendar;

    let task = new Task();
    // task.id = this.Task.id; // Dev Environment
    task.title = this.Task.title;
    task.isDone = this.checked;
    task.deadLine = this.Task.deadLine;

    // this._localTaskService.putTask(task).subscribe(); // Dev Environment
    this._fbTaskService.putTask(task);
    this.disabledButton = true;
    this.openSnackBar();
  }

  isValidButton() {
    return this.disabledButton;
  }

  onUpdateComplete(): void {
    this._router.navigate([""]);
  }

  openSnackBar() {
    this._snackBar.open(`${this.Task.title} has been updated`, "OK", {
      duration: 5000
    });
  }
}
