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
        return users;
    }));
  }

}
