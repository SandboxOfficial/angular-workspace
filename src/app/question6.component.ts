/**QUESTION: How to implement Typeahead search text box which triggers subscription after 3char keyed. Also make sure canceling effects and avoiding nested Subscriptions **/

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { TesteventService } from './testEvent.service';

@Component({
  selector: 'question6',
  template: ` <h5>Q6.How to implement Typeahead search text box which triggers subscription after 3char keyed.  </h5>
  <ng-template #rt let-r="result" let-t="term">
  <ngb-highlight [result]="r.name" [term]="t"></ngb-highlight>
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
    return this.http
      .get(`https://randomuser.me/api/`)
      .pipe(map((res: any) => res.map((u: any) => u.login)));
  };
  constructor(private http: HttpClient) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      map((typedValue: string) => {
        this.typeterm = typedValue;
        return this.getUsers().pipe(
          map((users) => users.filter((user) => user.name.includes(typedValue)))
        );
      })
    );

  formatter = (x: { name: string }) => x.name;
}
