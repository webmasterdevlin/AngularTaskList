import { Component, OnInit } from "@angular/core";
import { LocalTaskService } from "../../services/local-task.service";
import { Task } from "../../models/task";
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

  constructor(
    private _localTaskService: LocalTaskService,
  ) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this._localTaskService.getTasks().subscribe(data => {
      console.log("Data from local server: ", data);
      this.TaskList = data;
    });
  }

  deleteTask(task: Task) {
    this._localTaskService.deleteTask(task).subscribe(data => this.getTasks());
  }
}
