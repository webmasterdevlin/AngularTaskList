import { Component, OnDestroy, OnInit } from "@angular/core";
import { LocalTaskService } from "../../services/local-task.service";
import { Task } from "../../models/task";
import { Subscription } from "rxjs/Subscription";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { Observable } from "rxjs/Observable";
import { FirebaseTaskService } from "../../services/firebase-task.service";
import "rxjs/add/operator/do";
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("fade", [
      state("void", style({ opacity: 0 })),
      transition("void => *", [animate(1500)]),
      transition("* => void", [animate(1500)])
    ])
  ]
})
export class HomeComponent implements OnInit {
  TaskList: Task[] = [];
  TaskList$;

  constructor(
    private _localTaskService: LocalTaskService,
    private _fbTaskService: FirebaseTaskService
  ) {}

  ngOnInit() {
    this.getTasksFromFireBase();
    // this.getTasks();
  }
  private getTasksFromFireBase() {
    this.TaskList$ = this._fbTaskService
      .getTasks()
      .do(d => console.log("Firebase: ", d));
  }
  getTasks() {
    this._localTaskService.getTasks().subscribe(data => {
      console.log("Data from local server: ", data);
      this.TaskList$ = data;
    });
  }

  deleteTask(task: Task) {
    // this._localTaskService.deleteTask(id).subscribe(data => this.getTasks()); // Dev Environment
    return this._fbTaskService.deleteTask(task);
  }
}
