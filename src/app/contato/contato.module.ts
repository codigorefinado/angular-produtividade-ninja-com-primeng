import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,

    RouterModule.forChild([
      { path: '', component: ContatoComponent }
    ])
  ],
  declarations: [ ContatoComponent ]
})
export class ContatoModule {
}
