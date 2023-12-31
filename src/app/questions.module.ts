import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Question1Component } from './question1.component';
import { Question2Component } from './question2.component';
import { Question3Component } from './question3.component';
import { Question4Component } from './question4.component';
import { Question5Component } from './question5.component';
import { Question6Component } from './question6.component';
import { QuestionsComponent } from './questions.component';
import { TestRouterComponent } from './router.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Question7Component } from './question7.component';
import { ChildComponent } from './child.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, NgbModule],
  declarations: [
    QuestionsComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component,
    Question6Component,
    Question7Component,
    TestRouterComponent,
    ChildComponent,
  ],
  exports: [
    QuestionsComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component,
    Question6Component,
    Question7Component,
    ChildComponent,
    TestRouterComponent,
  ],
})
export class QuestionsModule {}
