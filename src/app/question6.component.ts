/**QUESTION: How to implement Typeahead search text box which triggers subscription after 3char keyed. Also make sure canceling effects and avoiding nested Subscriptions **/

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  map,
  Observable,
  switchMap,
  of,
  filter,
  debounceTime,
  tap,
} from 'rxjs';
import { TesteventService } from './testEvent.service';
export interface User {
  firstName: string;
  lastName: string;
}
@Component({
  selector: 'question6',
  template: ` <h5>Q6.Below is the Typeahead search text box which triggers subscription after every char keyed.  
  Delay & Trigger the subscription after 3char keyed-in.</h5>
  <ng-template #rt let-r="result" let-t="term">
  <ngb-highlight [result]="r.firstName+' '+r.lastName" [term]="t"></ngb-highlight>
  </ng-template>
  <p><b> Delayed Keyup: </b>{{typeterm}}</p>
  <label for="typeahead-template">Search user:</label> 
  <input id="typeahead-template" type="text" class="form-control" [(ngModel)]="model" #ctrl="ngModel"  [ngbTypeahead]="search" [resultTemplate]="rt"
    [inputFormatter]="formatter" />
  <br> <br>

  `,
  providers: [TesteventService],
})
export class Question6Component {
  public model: any;
  public typeterm: any;
  getUsers = () => {
    return this.http.get(`https://dummyjson.com/users`).pipe(
      map((res: any) =>
        res.users.map((u: any) => ({
          firstName: u.firstName,
          lastName: u.lastName,
        }))
      )
    );
  };
  constructor(private http: HttpClient) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      switchMap((typedValue: string) => {
        this.typeterm = typedValue;
        return this.getUsers().pipe(
          map((users) =>
            users.filter((user: User) => {
              let name = `${user.firstName} ${user.lastName}`;
              if (name.includes(typedValue)) {
                return user;
              }
              return of(null);
            })
          )
        );
      })
    );

  formatter = (x: { firstName: string; lastName: string }) =>
    `${x.firstName} ${x.lastName}`;
}
