import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContatoComponentService } from './contato.component.service';

@Component({
  selector: 'contato-component',
  templateUrl: './contato.component.html',
  styleUrls: [ './contato.component.css' ]
})
export class ContatoComponent {
  constructor(private contatoComponentService: ContatoComponentService) {
  }

  enviarContato(contatoForm: NgForm) {

    this.contatoComponentService.enviarContato(contatoForm.value).subscribe((response) => {
      console.log('Response', response);
    });


  }
}
