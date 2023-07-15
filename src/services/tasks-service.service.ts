import { Injectable } from '@angular/core';
import { taskModel } from 'src/models/tasks';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  constructor(private http:HttpClient) { }

  tasksApi=environments.tasksApi
  getTasks(id:string|null){
    const userTaskUrl=this.tasksApi+'?userid='+id;
    return this.http.get<taskModel[]>(userTaskUrl);
  }
}
