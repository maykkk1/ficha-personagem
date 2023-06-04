import { Component, OnDestroy, OnInit } from '@angular/core';
import { faTheaterMasks, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { PersonagemService } from 'src/app/personagem-service';
import { Personagem } from 'src/personagem.model';

@Component({
  selector: 'app-personagem-bar',
  templateUrl: './personagem-bar.component.html',
  styleUrls: ['./personagem-bar.component.css']
})
export class PersonagemBarComponent implements OnInit, OnDestroy {
  personagem: Personagem;
  alinhamentoIcon = faTheaterMasks
  personagem$Sub: Subscription;
  xpTotal: number;

  constructor(private personagemService: PersonagemService) { }

  ngOnInit(): void {
    this.personagem = this.personagemService.getPersonagem();
    this.xpTotal = this.personagemService.getXpByNivel(this.personagem.level)! - this.personagemService.getXpByNivel(this.personagem.level - 1)!;
    console.log(this.xpTotal);

    this.personagem$Sub = this.personagemService.personagemChange.subscribe(data => {
      this.personagem = data;
      this.xpTotal = this.personagemService.getXpByNivel(this.personagem.level)! - this.personagemService.getXpByNivel(this.personagem.level - 1)!;
    })
  }

  getXpPorcentagem(){
    return  ((this.personagem.xp - this.personagemService.getXpByNivel(this.personagem.level - 1)!) / this.xpTotal) * 100;
  }

  getVidaPorcentagem(){
    return  (this.personagem.vida / this.personagem.vidaMaxima) * 100;
  }


  ngOnDestroy(): void {
    this.personagem$Sub.unsubscribe();
  }

}
