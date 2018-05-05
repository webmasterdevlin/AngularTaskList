import { Injectable } from "@angular/core";
import { Task } from "../models/task";
import {
  AngularFireDatabase,
  FirebaseListObservable, FirebaseObjectObservable
} from 'angularfire2/database-deprecated';

@Injectable()
export class FirebaseTaskService {
  private _path = "/tasklist";
  private TaskList$: FirebaseListObservable<any[]>;
  private Task$ : FirebaseObjectObservable<any>;
  constructor(private _afDb: AngularFireDatabase) {
    this.TaskList$ = this._afDb.list(this._path);
    this.Task$ = this._afDb.object(this._path);
  }

  getTasks(): FirebaseListObservable<any[]> {
    return this.TaskList$;
  }
  postTask(task: Task) {
    return this.TaskList$.push(task);
  }
  getTask(id: string) {
    return this._afDb.object(`${this._path}/${id}`);
  }

  putTask(task: Task) {
    return this._afDb.object(this._path +'/'+ task.$key).update(task);
  }

  deleteTask(task: Task) {
    return this.TaskList$.remove(task.$key);
  }
}
