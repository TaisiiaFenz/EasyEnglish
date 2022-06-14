import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { proUser, Test } from 'src/types';
import { dbUrl } from 'src/urlConfig';

@Injectable({
  providedIn: 'root'
})
export class FreshmanTestService {
  static url = dbUrl;

  constructor(private http: HttpClient) { }

  getFreshmanTest(): Observable<Test[]> {
    return this.http.get<Test[]>(`${FreshmanTestService.url}/freshmanTest.json`)
      .pipe(map(tests => {
        console.log(tests);
        if (!tests) {
          return [];
        }
        return Object.values(tests).map((test) => {
          test.answers = Object.values(test.answers);
          return test;
        });
    }));
  }

  updateLevelOfEnglishOfCurrentUser(levelOfEnglish: string) {
    return this.http
    .patch<proUser>(`${FreshmanTestService.url}/currentUser.json`, levelOfEnglish)
    .pipe(map(res => {
      return res;
    }));
  }
}
