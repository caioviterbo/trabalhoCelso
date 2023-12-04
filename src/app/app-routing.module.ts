import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cronograma', pathMatch: 'full' },
  {
    path: 'cronograma',
    loadChildren: () => import('./cronograma/cronograma.module').then(m => m.CronogramaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
