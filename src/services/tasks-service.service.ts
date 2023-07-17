import { Injectable } from '@angular/core';
import { taskAssignment, taskModel } from 'src/models/tasks';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  constructor(private http: HttpClient) { }

  tasksApi = environments.tasksApi;
  usersApi = environments.usersApi;

  getTasks(id: string | null) {
    if (id === '0') {
      const userTaskUrl = this.tasksApi;
      return this.http.get<taskModel[]>(userTaskUrl);
    }
    const userTaskUrl = this.tasksApi + '?userid=' + id;
    return this.http.get<taskModel[]>(userTaskUrl);
  }

  postTasks(taskData: taskAssignment) {
    return this.http.post(this.tasksApi, taskData).subscribe();
  }

  deleteTasks(id: number) {
    const deleteUrl = this.tasksApi + '/' + id;
    return this.http.delete(deleteUrl).subscribe();
  }


}
