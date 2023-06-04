import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonagemService } from 'src/app/personagem-service';
import { Moedas } from 'src/personagem.model';

@Component({
  selector: 'app-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css']
})
export class PainelControleComponent implements OnInit {
  painelForm: FormGroup;
  menuOption: number = 0;
  @Output() closePainel = new EventEmitter<void>();

  constructor(private personagemService: PersonagemService) { }

  ngOnInit(): void {
    this.painelForm = new FormGroup({
      xp: new FormControl(0),
      platina: new FormControl(0),
      ouro: new FormControl(0),
      electrum: new FormControl(0),
      prata: new FormControl(0),
      cobre: new FormControl(0),
      vida: new FormControl(0)
    });
  }

  onSubmit(){
    switch(this.menuOption){
      case 0:
        this.personagemService.alterarXp(this.painelForm.controls['xp'].value);
        break;
      case 1:
        this.personagemService.alterarMoedas({
          platina: this.painelForm.controls['platina'].value!,
          ouro: this.painelForm.controls['ouro'].value!,
          electrum: this.painelForm.controls['electrum'].value!,
          prata: this.painelForm.controls['prata'].value!,
          cobre: this.painelForm.controls['cobre'].value!
        });
        break;
      default:
        this.personagemService.alterarVida(this.painelForm.controls['vida'].value);
        break;
    }
    this.close();
  }

  mudarMenu($event:number){
    this.menuOption = $event;
    this.painelForm.reset();
  }

  close(){
    this.closePainel.emit();
  }

}
