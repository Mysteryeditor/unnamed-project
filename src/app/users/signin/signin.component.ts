import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { usersData } from 'src/models/users';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  obj = new signin_Credentials();
  userInfo!: usersData;

  constructor(private user:UsersService){}
  ngOnInit(): void {

  }


  onSubmit() {
this.user.getUserData().subscribe((res)=>{
  for (const user1 of res) {
    if(this.obj.email==user1.email && this.obj.password==user1.password){
      alert('Login Successfull');
      
      return
    }    
  }

  alert('login failed')

   




})
  }
}

class signin_Credentials {
  email!: string;
  password!: string;
}


