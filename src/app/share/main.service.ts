import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { proUser } from "../../types";
import {map, mergeMap} from "rxjs/operators";
import {forkJoin, Observable} from "rxjs";
import { dbUrl } from 'src/urlConfig';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  static url = dbUrl;

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

  deleteUsersList(): Observable<proUser[]> {
    return this.http.delete<proUser[]>(`${MainService.url}/users.json`)
    .pipe(map(res => {
      return res;
    }));
  }

  deleteCurrentUser(): Observable<proUser> {
    return this.http.delete<proUser>(`${MainService.url}/currentUser.json`)
    .pipe(map(res => {
      return res;
    }));
  }

  updateUsersOfUserList(users: proUser[]) {
    const addUsersRequests = forkJoin(users.map(user => this.addUser(user)));
    this.deleteUsersList().pipe(
      mergeMap((res) => addUsersRequests))
      .subscribe(res => console.log(res));
  }
}
