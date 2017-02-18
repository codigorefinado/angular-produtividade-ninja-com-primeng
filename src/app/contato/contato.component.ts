import { Component } from '@angular/core';

@Component({
  selector: 'contato-component',
  templateUrl: './contato.component.html',
  styleUrls: [ './contato.component.css' ]
})
export class ContatoComponent {
  clicks: number = 0;

  count() {
    this.clicks++;
  }

}
