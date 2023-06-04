import { Injectable } from "@angular/core";
import { Equipamento } from "./equipamento.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class EquipamentosService {
    equipamentosChange: Subject<Equipamento[]> = new Subject<Equipamento[]>();
    equipamentos: Equipamento[];

    constructor(){}

    getEquipamentos(){
        return [...this.equipamentos];
    }

    sincronizarEquipamentos(){
        if(localStorage.getItem('equipamentos') != null) {
            this.equipamentos = JSON.parse(localStorage.getItem('equipamentos')!);
        } else {
            localStorage.setItem('equipamentos', '[]');
        }
    }

    adicionarEquipamento(equipamento: Equipamento){
        const idx = this.equipamentos.findIndex(e => e.nome === equipamento.nome);
        if(idx != -1){
            this.equipamentos[idx].quantidade += equipamento.quantidade;
        } else {
            this.equipamentos.push(equipamento);
        }
        this.salvarDados();
    }

    adicionarUnidade(nome: string){
        const idx = this.equipamentos.findIndex(a => a.nome === nome);
        this.equipamentos[idx].quantidade++;
        this.salvarDados();
    }

    removerUnidade(nome: string) {
        const idx = this.equipamentos.findIndex(a => a.nome === nome);
        if(this.equipamentos[idx].quantidade > 1) {
            this.equipamentos[idx].quantidade--;
        } else {
            this.equipamentos.splice(idx, 1);
        }
        this.salvarDados();
    }

    salvarDados(){
        localStorage.setItem('equipamentos', JSON.stringify(this.equipamentos));
        this.equipamentosChange.next([...this.equipamentos]);
    }

}