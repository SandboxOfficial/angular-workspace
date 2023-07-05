/**QUESTION: What is best practice to remove duplicate/redundant API request **/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, shareReplay, Observable } from 'rxjs';

export interface User {
  login: string;
}
@Component({
  selector: 'question5',
  template: ` <h5>Q5. What is best practice to remove duplicate/redundant API request</h5>
  <p>{{countertext}}</p>
  `,
})
export class Question5Component implements OnInit {
  counter = 1;
  countertext: string = '';
  getUsers = (): Observable<User[]> => {
    return this.http.get(`https://api.github.com/users?per_page=5`).pipe(
      tap(
        () => (this.countertext = `request happened : ${this.counter++} times`)
      ),
      map((res: any) => res.map((u: any) => u.login))
    );
  };
  users$ = this.getUsers();
  constructor(private http: HttpClient) {}
  ngOnInit() {
    // multiple consumers are interested in the stream within the caching window
    // only one "request happened" must be logged out, response is cached
    this.users$.subscribe(console.log);
    this.users$.subscribe(console.log);
    this.users$.subscribe(console.log);
    this.users$.subscribe(console.log);
  }
}
