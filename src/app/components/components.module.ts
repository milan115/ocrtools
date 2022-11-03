import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressBarComponent } from './progressbar/progressbar.component';

@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent,
    ProgressBarComponent],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProgressBarComponent],
  entryComponents: [
    HeaderComponent,
    FooterComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class ComponentsModule { }
