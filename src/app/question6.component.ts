/**QUESTION: How to implement Typeahead search text box which triggers subscription after 3char keyed. Also make sure canceling effects and avoiding nested Subscriptions **/

import { Component } from '@angular/core';
import { map, Observable, switchMap, filter } from 'rxjs';
import { TesteventService } from './testEvent.service';

@Component({
  selector: 'question6',
  template: ` <h3>Q6.How to implement Typeahead search text box which triggers subscription after 3char keyed. Also make sure canceling effects and avoiding nested Subscriptions</h3>
  <ng-template #rt let-r="result" let-t="term">
  <ngb-highlight [result]="r.name" [term]="t"></ngb-highlight>
  </ng-template>
  <label for="typeahead-template">Search user:</label> {{hint}} 
  <input id="typeahead-template" type="text" class="form-control"[(ngModel)]="model" #ctrl="ngModel"  [ngbTypeahead]="search" [resultTemplate]="rt"
    [inputFormatter]="formatter" />
    <p>Keyup regular : {{model}}</p>
    <p>Keyup Delayed : {{typeterm}}</p>
  `,
  providers: [TesteventService],
})
export class Question6Component {
  public model: any;
  public hint: any;
  public typeterm: any;
  constructor(private testService: TesteventService) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      filter((val) => val.length > 2),
      switchMap((typedValue: string) => {
        this.hint = `switchMap typedValue -> ${typedValue}`;
        this.typeterm = typedValue;
        return this.testService
          .getUsers()
          .pipe(
            map((users) =>
              users.filter((user) => user.name.includes(typedValue))
            )
          );
      })
    );

  formatter = (x: { name: string }) => x.name;
}
