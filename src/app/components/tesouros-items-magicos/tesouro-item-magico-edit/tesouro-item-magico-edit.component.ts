import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from '../item.model';
import { ItensService } from '../tesouros-items-magicos.service';

@Component({
  selector: 'app-tesouro-item-magico-edit',
  templateUrl: './tesouro-item-magico-edit.component.html',
  styleUrls: ['./tesouro-item-magico-edit.component.css']
})
export class TesouroItemMagicoEditComponent implements OnInit {
  itemForm: FormGroup;
  @Output() closeModal = new EventEmitter<void>();


  constructor(private itensService: ItensService) { }

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      nome: new FormControl(null),
      valor: new FormControl(null),
      peso: new FormControl(null),
      quantidade: new FormControl(null),
      tipo: new FormControl(0),
      descricao: new FormControl(null),
    });
  }

  close(){
    this.closeModal.emit();
  }

  onSubmit(){
    this.itensService.salvarItem(this.itemForm.value);
    this.close();
  }

}
