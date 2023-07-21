import { Injectable } from '@angular/core';
import { taskAssignment } from 'src/models/tasks';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { UsersService } from './users.service';
import Swal from 'sweetalert2';
import { purple } from '@mui/material/colors';
@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  constructor(private http: HttpClient, private userService: UsersService) { }

  tasksApi = environments.tasksApi;


  getTasks(id: string | null) {
    if (id === '0') {
      const userTaskUrl = this.tasksApi;
      return this.http.get<taskAssignment[]>(userTaskUrl);
    }
    const userTaskUrl = this.tasksApi + '?userid=' + id;
    return this.http.get<taskAssignment[]>(userTaskUrl);
  }

  postTasks(taskData: taskAssignment) {
    return this.http.post(this.tasksApi, taskData).subscribe();
  }

  deleteTasks(id: number) {
    const deleteUrl = this.tasksApi + '/' + id;
    return this.http.delete(deleteUrl).subscribe();
  }

  getSingleTask(taskId: number) {
    const singleTaskUrl = this.tasksApi + '/' + taskId;
    return this.http.get<taskAssignment[]>(singleTaskUrl);
  }

  putSingleTask(taskDetails: taskAssignment) {
    const putSingleTaskUrl = this.tasksApi + '/' + taskDetails.id;
    //incrementing the taskcount 
    if (taskDetails.status.toLowerCase() === 'done') {
      this.userService.getUserId(taskDetails.userName).subscribe((res) => {
        console.log(res[0].completedTaskCount);
        res[0].completedTaskCount = res[0].completedTaskCount + 1;
        console.log(res[0].completedTaskCount);
        this.userService.putTaskCount(res[0], res[0].id);
      });
    }
    return this.http.put(putSingleTaskUrl, taskDetails).subscribe(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        timer: 3000,
        title: 'Updated SuccessFully',
        showConfirmButton: false,
        color: 'purple',
        background: 'white'
      });
      Toast.fire();
    });

  }

  putAdminUpdate(item: taskAssignment, id: number) {
    const putSingleTaskUrl = this.tasksApi + '/' + id;
    return this.http.put(putSingleTaskUrl, item).subscribe();
  }
}
