import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { faArrowDown, faArrowUp, faCoins, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import { ItensService } from '../tesouros-items-magicos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  faCoins = faCoins;
  faWeightHanging = faWeightHanging;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(private itensService: ItensService) { }

  ngOnInit(): void {
  }

  adicionar(){
    this.itensService.adicionarItem(this.item.id);
  }

  diminuir(){
    this.itensService.removeItem(this.item.id);
  }

}
