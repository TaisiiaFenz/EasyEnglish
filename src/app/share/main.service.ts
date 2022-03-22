import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { proUser } from "../../types";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  static url = 'https://easyenglish-b4024-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }

  addUser(user: proUser): Observable<proUser> {
    return this.http.post<any>(`${MainService.url}/users.json`, user)
      .pipe(map(res => {
        return res;
      }));
  }

  getUsersList(): Observable<proUser[]> {
    return this.http.get<proUser[]>(`${MainService.url}/users.json`)
      .pipe(map(users => {
        if (!users) {
          return [];
        }
        return Object.values(users);
    }));
  }

  updateCurrentUser(user: proUser): Observable<proUser> {
    this.deleteCurrentUser().subscribe(res => {});
    return this.http.put<proUser>(`${MainService.url}/currentUser.json`, user)
    .pipe(map(res => {
      return res;
    }));
  }

  getCurrentUser(): Observable<proUser> {
    return this.http.get<proUser>(`${MainService.url}/currentUser.json`)
    .pipe(map(user => {
      return user;
  }));
  }

  deleteCurrentUser(): Observable<proUser> {
    return this.http.delete<proUser>(`${MainService.url}/currentUser.json`)
    .pipe(map(res => {
      return res;
    }));
  }
}
