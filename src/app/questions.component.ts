import { Component } from '@angular/core';

@Component({
  selector: 'questions',
  template: ` <h3>Choose a question </h3>
  <select   (change)="updatQues($event)">
  <option  *ngFor="let option of options" value= "{{option}}"> Question {{option}}</option></select>
  <ng-container [ngSwitch]="qNum">
  <question1 *ngSwitchCase="'1'"></question1>
  <question2 *ngSwitchCase="'2'"></question2>
  <question33 *ngSwitchCase="'3'"></question33>
  <question4 *ngSwitchCase="'4'"></question4>
  <question5 *ngSwitchCase="'5'"></question5>
  <question6 *ngSwitchCase="'6'"></question6>
</ng-container>
  `,
})
export class QuestionsComponent {
  qNum = 1;
  options = [1, 2, 3, 4, 5, 6];
  updatQues = (event: any): any => {
    this.qNum = event.target.value;
  };
}
