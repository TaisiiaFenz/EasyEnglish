import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { proUser } from "../../types";
import {map, mergeMap, tap} from "rxjs/operators";
import {forkJoin, Observable} from "rxjs";
import { dbUrl } from 'src/urlConfig';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  static url = dbUrl;

  // public usersRef: AngularFireList<any>;
  // public currentUserRef: AngularFireObject<any>;
  // public currentUser: any;
  // res: any;

  constructor(private http: HttpClient,
     private db: AngularFireDatabase) { 
      // this.usersRef = db.list('/users');
      // this.currentUserRef = db.object('/currentUser');
      //this.setCurrentUser();
     }

  // getUsersListRef(): AngularFireList<any> {
  //   return this.usersRef;
  // }

  // getCurrentUserRef(): AngularFireObject<any> {
  //   return this.currentUserRef;
  // }

  // setCurrentUser(): any {
  //   return this.getCurrentUserRef().snapshotChanges().pipe(
  //     map(changes => ({...changes.payload.val()}))
  //   ).subscribe(user => {
  //     this.currentUser = user;
  //   })
  // }

  // getUserList(): Observable<proUser[]> {
  //   return this.getUsersListRef().snapshotChanges().pipe(
  //     map(changes => 
  //       changes.map(c => ({...c.payload.val()})
  //       )      
  //     )
  //   )
  // }

  getUsersList(): Observable<proUser[]> {
    return this.http.get<proUser[]>(`${MainService.url}/users.json`)
      .pipe(map(users => {
        if (!users) {
          return [];
        }
        return Object.values(users);
    }));
  }

  addUser(user: proUser): Observable<proUser> {
    return this.http.post<any>(`${MainService.url}/users.json`, user)
      .pipe(map(res => {
        return res;
      }));
  }

  updateCurrentUser(user: proUser): Observable<proUser> {
    this.deleteCurrentUser().subscribe(res => {});
    return this.deleteCurrentUser().pipe(
      mergeMap(val => this.http.put<proUser>(`${MainService.url}/currentUser.json`, user)
        .pipe(map(res => {
          return res;
        }))
      )
    );
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
