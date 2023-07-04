import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileSizePipe } from './filesize.pipe';
import { Question1Component } from './question1.component';
import { Question2Component } from './question2.component';
import { Question3Component } from './question3.component';
import { Question4Component } from './question4.component';
import { Question5Component } from './question5.component';
import { Question6Component } from './question6.component';
import { QuestionsComponent } from './questions.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    QuestionsComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component,
    Question6Component,
    FileSizePipe,
  ],
  exports: [
    QuestionsComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component,
    Question6Component,
  ],
})
export class QuestionsModule {}
