import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Four0fourComponent } from './four0four.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: Four0fourComponent
      }
    ])
  ],
  declarations: [Four0fourComponent],
})
export class Four0fourModule { }
