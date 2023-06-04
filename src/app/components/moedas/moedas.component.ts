import { Component, OnInit } from '@angular/core';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.component.html',
  styleUrls: ['./moedas.component.css']
})
export class MoedasComponent implements OnInit {
  faCoins = faCoins

  constructor() { }

  ngOnInit(): void {
  }

}
