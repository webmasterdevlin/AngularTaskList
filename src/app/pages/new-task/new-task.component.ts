import { Component, OnInit } from "@angular/core";

import { MatSnackBar } from "@angular/material";

import {Task} from '../../models/task';
import {LocalTaskService} from '../../services/local-task.service';

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrls: ["./new-task.component.css"]
})
export class NewTaskComponent {
  TaskList: Task[] = [];
  TaskInput: string;

  constructor(
    private _localTaskService: LocalTaskService,
    private _snackBar: MatSnackBar
  ) {}

  onCreate(input, calendar) {
    let task = new Task();
    task.title = input;
    task.isDone = false;
    task.daysRemaining = calendar as Date;

    this._localTaskService.postTask(task).subscribe();
    this.openSnackBar();
    this.TaskInput = "";
  }

  openSnackBar() {
    this._snackBar.open("A new task has been created", "OK", {
      duration: 5000
    });
  }
}
