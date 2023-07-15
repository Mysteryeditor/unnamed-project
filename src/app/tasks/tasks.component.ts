import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TasksServiceService } from 'src/services/tasks-service.service';
import { taskModel } from 'src/models/tasks';
import { take } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  userId!: string | null;

  taskData!: taskModel[];
  constructor(private actroute: ActivatedRoute, private taskservice: TasksServiceService) { }
  ngOnInit(): void {
    this.userId = this.actroute.snapshot.paramMap.get('id');
    this.taskservice.getTasks(this.userId).subscribe(
      (res) => {
        this.taskData = res;
        console.log(this.taskData);
      });



  }

  getDaysLeft(assignedDate: string, dueDate: string) {
    const iniDate=new Date(assignedDate);
    const deadlin=new Date(dueDate);
    const milliSec = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs(Number(deadlin) - Number(iniDate))/milliSec
    )
  }

}
