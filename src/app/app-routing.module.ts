import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/ocr/ocr.module').then(m => m.OcrModule) },
  { path: '**', loadChildren: () => import('./pages/four0four/four0four.module').then(m => m.Four0fourModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
