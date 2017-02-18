import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'contato',
        loadChildren: 'app/contato/contato.module#ContatoModule'
      }
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
