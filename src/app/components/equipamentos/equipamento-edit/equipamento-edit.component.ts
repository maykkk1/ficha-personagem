import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Equipamento, listaDeEquipamentos } from '../equipamento.model';
import { EquipamentosService } from '../equipamento.service';

@Component({
  selector: 'app-equipamento-edit',
  templateUrl: './equipamento-edit.component.html',
  styleUrls: ['./equipamento-edit.component.css']
})
export class EquipamentoEditComponent implements OnInit {
  equipamentosForm: FormGroup;
  listaDeEquipamentos: Equipamento[];
  equipamentoSelectionado: Equipamento;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private equipamentosService: EquipamentosService) { }

  ngOnInit(): void {
    this.listaDeEquipamentos = [...listaDeEquipamentos]
    this.equipamentoSelectionado = this.listaDeEquipamentos[0];
    this.equipamentosForm = new FormGroup({
      equipamento: new FormControl(0),
      quantidade: new FormControl(1)
    });
  }

  onSubmit(){
    this.equipamentoSelectionado = this.listaDeEquipamentos[this.equipamentosForm.controls['equipamento'].value];
    this.equipamentoSelectionado.quantidade = this.equipamentosForm.controls['quantidade'].value;
    this.equipamentosService.adicionarEquipamento(this.equipamentoSelectionado);
    this.close();
  }

  close(){
    this.closeModal.emit();
  }

}
