import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Arma, listaDeArmas } from '../arma.model';
import { ArmasService } from '../armas.service';

@Component({
  selector: 'app-arma-edit',
  templateUrl: './arma-edit.component.html',
  styleUrls: ['./arma-edit.component.css']
})
export class ArmaEditComponent implements OnInit {
  armasForm: FormGroup;
  armaSelecionada: Arma;
  listaDeArmas: Arma[];
  @Output() closeModal = new EventEmitter<void>();

  constructor(private armasService: ArmasService) { }

  ngOnInit(): void {
    this.listaDeArmas = listaDeArmas;
    this.armaSelecionada = {...listaDeArmas[0]};
    this.armasForm = new FormGroup({
      arma: new FormControl(0),
      quantidade: new FormControl(1)
    });
  }

  onSubmit(){
    this.armaSelecionada.quantidade = this.armasForm.controls['quantidade'].value;
    this.armasService.adicionarArma({...this.armaSelecionada});
    this.close();
  }

  close(){
    this.closeModal.emit();
  }

  armaChange(){
    this.armaSelecionada = {...this.listaDeArmas[this.armasForm.controls['arma'].value]}
  }

}
