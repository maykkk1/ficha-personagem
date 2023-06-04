import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonagemService } from 'src/app/personagem-service';
import { Personagem } from 'src/personagem.model';

@Component({
  selector: 'app-protecao',
  templateUrl: './protecao.component.html',
  styleUrls: ['./protecao.component.css']
})
export class ProtecaoComponent implements OnInit, OnDestroy {
  personagem: Personagem;
  personagem$Sub: Subscription;

  constructor(private personagemService: PersonagemService) { }

  ngOnInit(): void {
    this.personagem = this.personagemService.getPersonagem();

    this.personagem$Sub = this.personagemService.personagemChange.subscribe(data => {
      this.personagem = data;
    })
  }

  ngOnDestroy(): void {
    this.personagem$Sub.unsubscribe();
  }

}
