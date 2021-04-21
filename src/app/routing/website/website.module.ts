import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '**',
        loadChildren: () => import('./routing/not-found/not-found.module')
          .then(module => module.NotFoundModule)
      }
    ])
  ]
})
export class WebsiteModule { }
