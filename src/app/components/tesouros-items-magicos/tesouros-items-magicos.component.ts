import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItensService } from './tesouros-items-magicos.service';
import { Item } from './item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tesouros-items-magicos',
  templateUrl: './tesouros-items-magicos.component.html',
  styleUrls: ['./tesouros-items-magicos.component.css']
})
export class TesourosItemsMagicosComponent implements OnInit, OnDestroy {
  showEdit: boolean = false;
  itens: Item[];
  itens$Subscription: Subscription;

  constructor(private itensService: ItensService) { }

  ngOnInit(): void {
    this.itensService.sincronizarItens();
    this.itens = this.itensService.getItens();

    this.itens$Subscription = this.itensService.itensChange.subscribe(data => {
      this.itens = data;
    })
  }

  visible(){
    this.showEdit = !this.showEdit;
  }

  ngOnDestroy(): void {
    
  }

}
