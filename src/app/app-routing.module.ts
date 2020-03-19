import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './services/data-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'task', loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)},
  { path: 'counter', loadChildren: () => import('./counter/counter.module').then( m => m.CounterPageModule)},
  { path: 'counter/:id', 
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./counter/counter.module').then( m => m.CounterPageModule)},  {
    path: 'end',
    loadChildren: () => import('./end/end.module').then( m => m.EndPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
