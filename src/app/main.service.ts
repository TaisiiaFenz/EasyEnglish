import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { proUser } from "../types";
import {map, mergeMap, tap} from "rxjs/operators";
import {forkJoin, Observable} from "rxjs";
import { dbUrl } from 'src/urlConfig';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  static url = dbUrl;

  public usersRef: AngularFireList<any>;
  public currentUserRef: AngularFireObject<any>;
  public currentUser: any;

  constructor(private http: HttpClient, 
    private db: AngularFireDatabase) { 
      this.usersRef = db.list('/users');
      this.setCurrentUser();
     }

  getUsersListRef(): AngularFireList<any> {
    return this.usersRef;
  }

  getCurrentUserRef(): AngularFireObject<any> {
    return this.currentUserRef;
  }

  setCurrentUser(): any {
    return this.getCurrentUserRef().snapshotChanges().pipe(
      map(changes => ({...changes.payload.val()}))
    ).subscribe(user => {
      this.currentUser = user;
    })
  }

  getUserList(): Observable<proUser[]> {
    return this.getUsersListRef().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({...c.payload.val()})
        )      
      )
    )
  }

  addUser(user: proUser) {
    return this.getUsersListRef().push(user);
  }

  updateCurrentUser(user: proUser) {
    return this.getCurrentUserRef().set(user);
  }

  updateUsersOfUserList(users: proUser[]) {
    this.getUsersListRef().set(users);
  }
}