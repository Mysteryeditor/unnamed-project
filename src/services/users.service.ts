import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usersData } from 'src/models/users';
import { environments } from 'src/environments/environments';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private route: Router) { }

  usersApi = environments.usersApi

  postUserData(item: usersData) {
    return this.http.post<usersData>(this.usersApi, item).subscribe((res) => {
      this.route.navigate(['/signin']);
    });
  }

  getUserData(){
    return this.http.get<usersData[]>(this.usersApi);
  }
}
