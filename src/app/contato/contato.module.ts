import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { RouterModule } from '@angular/router';
import { ButtonModule, InputTextModule, FieldsetModule } from 'primeng/primeng';
import { SharedModuleModule } from '../shared/shared.module';
import { ContatoComponentService } from './contato.component.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ButtonModule,
    InputTextModule,
    FieldsetModule,

    RouterModule.forChild([
      { path: '', component: ContatoComponent }
    ])
  ],
  declarations: [ ContatoComponent ],
  providers: [ ContatoComponentService ]
})
export class ContatoModule {
}
