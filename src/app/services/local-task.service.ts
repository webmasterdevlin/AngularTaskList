import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Task } from "../models/task";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class LocalTaskService {
  private _url = "http://localhost:3000/tasklist/";

  constructor(private _httpClient: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return Observable.throw(error.message);
  }

  getTasks(): Observable<Task[]> {
    return this._httpClient
      .get<Task[]>(this._url)
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getTask(id: string): Observable<Task> {
    return this._httpClient.get<Task>(`${this._url}${id}`);
  }

  postTask(task: Task): Observable<any> {
    return this._httpClient.post(this._url, task);
  }

  putTask(task: Task): Observable<any> {
    return this._httpClient.put(`${this._url}${task.id}`, task);
  }

  deleteTask(task: Task): Observable<any> {
    return this._httpClient.delete(`${this._url}${task.id}`);
  }
}
