import { Injectable } from "@angular/core";
import { Item } from "./item.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ItensService {
    itensChange: Subject<Item[]> = new Subject<Item[]>;
    itens: {idAtual: number, data: Item[]};

    constructor(){}

    sincronizarItens(){
        if(localStorage.getItem('itens') != null) {
            this.itens = JSON.parse(localStorage.getItem('itens')!);
        } else {
            const data = {
                idAtual: 0,
                data: []
            };
            localStorage.setItem('itens', JSON.stringify(data));
        }
        }

    salvarItem(item: Item) {
        const itemData = item;
        itemData.id = this.itens.idAtual;
        this.itens.data.push(itemData);
        this.itens.idAtual++;
        this.salvarDados();
    }

    salvarDados(){
        localStorage.setItem('itens', JSON.stringify(this.itens));
        this.itensChange.next([...this.itens.data]);
    }

    getItens(){
        return [...this.itens.data];
    }

    adicionarItem(id: number){
        const idx = this.itens.data.findIndex(i => i.id == id);
        this.itens.data[idx].quantidade++;
        this.salvarDados();
    }

    removeItem(id: number) {
        const idx = this.itens.data.findIndex(i => i.id == id);
        if(this.itens.data[idx].quantidade < 2){
            this.itens.data.splice(idx, 1);
        } else {
            this.itens.data[idx].quantidade--;
        }
        this.salvarDados();
    }
    }