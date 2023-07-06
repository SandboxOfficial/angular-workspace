import { Component } from '@angular/core';

@Component({
  selector: 'questions',
  template: ` 
  <div class="d-flex"><label>Choose a question </label>   
   <select class="form-control" (change)="updatQues($event)">
  <option  *ngFor="let option of options" value= "{{option}}"> Question {{option}}</option></select>
  </div>
  <ng-container [ngSwitch]="qNum">
  <br> <br>
  <question1 *ngSwitchCase="'1'"></question1>
  <question22 *ngSwitchCase="'2'"></question22>
  <question33 *ngSwitchCase="'3'"></question33>
  <question4 *ngSwitchCase="'4'"></question4>
  <question5 *ngSwitchCase="'5'"></question5>
  <question6 *ngSwitchCase="'6'"></question6>
  <question7 *ngSwitchCase="'7'"></question7>
</ng-container>
  `,
})
export class QuestionsComponent {
  qNum = 1;
  options = [1, 2, 3, 4, 5, 6, 7];
  updatQues = (event: any): any => {
    this.qNum = event.target.value;
  };
}
