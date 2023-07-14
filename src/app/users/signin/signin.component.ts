import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { usersData } from 'src/models/users';
import { sessionData } from 'src/models/users';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  obj = new signin_Credentials();
  userInfo!: usersData;
  sessionInfo:sessionData={
    email: '',
    role: ''
  };

  constructor(private user:UsersService){}
  ngOnInit(): void {

  }


  onSubmit() {
this.user.getUserData().subscribe((res)=>{
  for (const user1 of res) {
    if(this.obj.email==user1.email && this.obj.password==user1.password){
      alert('Login Successfull');
      this.sessionInfo.email=user1.email;
      this.sessionInfo.role=user1.role;
      this.user.postSessionInfo(this.sessionInfo);
      this.user.validateAuth(true);
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


