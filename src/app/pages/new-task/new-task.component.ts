import { Component, OnInit } from "@angular/core";

import { MatSnackBar } from "@angular/material";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database-deprecated";
import {Task} from '../../models/task';
import {LocalTaskService} from '../../services/local-task.service';
import {FirebaseTaskService} from '../../services/firebase-task.service';

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrls: ["./new-task.component.css"]
})
export class NewTaskComponent {
  TaskList: Task[] = [];
  TaskList$: FirebaseListObservable<any[]>;
  TaskInput: string;

  constructor(
    private _localTaskService: LocalTaskService,
    private _fbTaskService: FirebaseTaskService,
    private _afFb: AngularFireDatabase,
    private _snackBar: MatSnackBar
  ) {}

  onCreate(input, calendar) {
    let task = new Task();
    task.title = input;
    task.isDone = false;
    task.deadLine = calendar as Date;

    // this._localTaskService.postTask(task).subscribe();
    this._fbTaskService.postTask(task);
    this.openSnackBar();
    this.TaskInput = "";
  }

  openSnackBar() {
    this._snackBar.open("A new task has been created", "OK", {
      duration: 5000
    });
  }
}
