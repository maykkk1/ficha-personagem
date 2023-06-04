import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FichaService } from 'src/app/services/ficha.service';
import { HabilidadeService } from '../habilidades.service';
import { Habilidade } from '../habilidade.model';

@Component({
  selector: 'app-habilidade-edit',
  templateUrl: './habilidade-edit.component.html',
  styleUrls: ['./habilidade-edit.component.css']
})
export class HabilidadeEditComponent implements OnInit {
  habilidadesForm: FormGroup;
  editionMode: boolean;
  habilidade: Habilidade | undefined;
  @Input() idEdit: number;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private habilidadeservice: HabilidadeService) { }

  ngOnInit(): void {
    this.editionMode = this.habilidadeservice.editionMode;
    if(this.editionMode){
      this.habilidade = this.habilidadeservice.getHabilidadeByid(this.idEdit);
      this.habilidadesForm = new FormGroup ({
        abilityName: new FormControl(this.habilidade?.abilityName),
        abilityModifier: new FormControl(this.habilidade?.abilityModifier),
        abilityDesc: new FormControl(this.habilidade?.abilityDesc)
      });
    } else {
      this.habilidadesForm = new FormGroup ({
        abilityName: new FormControl(null),
        abilityModifier: new FormControl(null),
        abilityDesc: new FormControl(null)
      });
    }
  }

  close(){
    if(this.editionMode){
      this.habilidadeservice.editionMode = false;
    }
    this.closeModal.emit();
  }

  onSubmit(){
    if(this.editionMode){
      const editedAbility: Habilidade = new Habilidade(
        this.idEdit,
        this.habilidadesForm.controls['abilityName'].value,
        this.habilidadesForm.controls['abilityModifier'].value,
        this.habilidadesForm.controls['abilityDesc'].value,
      );
      this.habilidadeservice.editarHabilidade(editedAbility);
      this.closeModal.emit();
    } else {
      this.habilidadeservice.salvarHabilidade(this.habilidadesForm.value);
    }
  }

}
