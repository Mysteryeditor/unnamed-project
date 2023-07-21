import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { usersData } from 'src/models/users';
import { TasksServiceService } from 'src/services/tasks-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
 constructor(private user:UsersService,private taskserv:TasksServiceService){}

userList:usersData[]=[];
  ngOnInit(): void {
    this.user.getOnlyUser().subscribe({
      next:(data)=>{
        console.log(data)
        this.userList=data;
      }
    });
  }
}