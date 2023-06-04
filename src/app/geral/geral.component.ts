import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../personagem-service';

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css']
})
export class GeralComponent implements OnInit {

  constructor(private personagemService: PersonagemService) { }

  ngOnInit(): void {
    this.personagemService.sincronizarPersonagem();
  }

}
