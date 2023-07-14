import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usersData } from 'src/models/users';
import { sessionData } from 'src/models/users';
import { environments } from 'src/environments/environments';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient, private route: Router) {}
  // for the user status
  public authSubject = new Subject<boolean>();

  //manipulation of the subject
  validateAuth(state: boolean) {
    this.authSubject.next(state);
  }

  // setting a value based on subject
  status?: boolean;
  getAuthStatus() {
    this.authSubject.subscribe((res) => {
      this.status = res;
    });
    return this.status;
  }

  usersApi = environments.usersApi;

  postUserData(item: usersData) {
    return this.http.post<usersData>(this.usersApi, item).subscribe((res) => {
      this.route.navigate(['/signin']);
    });
  }

  getUserData() {
    return this.http.get<usersData[]>(this.usersApi);
  }

  sessionApi = environments.sessionUrl;
  postSessionInfo(item: sessionData) {
    return this.http
      .post<sessionData>(this.sessionApi, item)
      .subscribe((data) => {
        console.log('login successfull');
      });
  }
}
