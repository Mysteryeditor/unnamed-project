import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { sessionData } from 'src/models/users';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isActive: boolean = false;
  activeUserId:number=0;
  adminOps:boolean=false;
  userId:number=0

  constructor(private user: UsersService) { }
  ngOnInit(): void {
    this.user.authSubject.subscribe((res) => {
      this.isActive = res;
      console.log(this.isActive);
    })

    this.user.getSessionInfo().subscribe((data)=>{
      if(data.length>0){
        this.isActive=true;
        this.activeUserId=data[0].userId;
        
        if(data[0].role==='admin'){
          console.log(data[0]);
          this.adminOps=true;
        }

        else{
          this.userId=data[0].userId
        }



      }
    })
    
  }
logout(){
this.user.logout(this.activeUserId);
this.adminOps=false;
}
}
