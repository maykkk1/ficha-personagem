import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Protecoes } from "src/personagem.model";
import { Personagem } from "src/personagem.model";

@Injectable({providedIn: 'root'})
export class PersonagemService {
    personagem: Personagem;
    personagemChange: Subject<Personagem> = new Subject<Personagem>();

    sincronizarPersonagem(){
        if(localStorage.getItem('personagem') != null) {
            this.personagem = JSON.parse(localStorage.getItem('personagem')!);
        } else {
            const personagem :Personagem = {
                nome: 'Reck',
                titulo: 'O Imprudente',
                alinhamento: 'Neutro',
                vida: 15,
                vidaMaxima: 15,
                xp: 0,
                xpParaUpar: this.getXpByNivel(1)!,
                atributos: {
                    forca: 13,
                    inteligencia: 12,
                    sabedoria: 10,
                    destreza: 16,
                    constituicao: 10,
                    carisma: 2
                },
                protecoes: this.getProtecosByNivel(1),
                moedas: {
                    platina: 0,
                    ouro: 0,
                    electrum: 0,
                    prata: 0,
                    cobre: 0
                },
                classeArmadura: 'Armadura Leve',
                classeArmaduraValor: 14,
                meleeMod: 0,
                rangedMod: 2,
                modificadorDeContituicaoVida: 0,
                sa: 12,
                modificadorDexArmadura: 2
            };
            localStorage.setItem('personagem', JSON.stringify(personagem));
        }
    }


    getXpByNivel(nv: number){
        return progressao.find(n => n.Nível == nv)?.XP;
    }

    getProtecosByNivel(nv: number){
        const nivel = progressao.find(n => n.Nível == nv)!;
        const protecoes: Protecoes = {
            m: nivel?.M,
            v: nivel?.F,
            p: nivel?.P,
            s: nivel?.S,
            f: nivel?.F,
            sabedoriaMod: 0
        }
        return protecoes;
    }

}


const progressao = [
    {
      "Nível": 1,
      "XP": 0,
      "M": 13,
      "V": 14,
      "P": 13,
      "S": 16,
      "F": 15
    },
    {
      "Nível": 2,
      "XP": 1200,
      "M": 13,
      "V": 14,
      "P": 13,
      "S": 16,
      "F": 15
    },
    {
      "Nível": 3,
      "XP": 2400,
      "M": 13,
      "V": 14,
      "P": 13,
      "S": 16,
      "F": 15
    },
    {
      "Nível": 4,
      "XP": 4800,
      "M": 13,
      "V": 14,
      "P": 13,
      "S": 16,
      "F": 15
    },
    {
      "Nível": 5,
      "XP": 9600,
      "M": 12,
      "V": 13,
      "P": 11,
      "S": 14,
      "F": 13
    },
    {
      "Nível": 6,
      "XP": 20000,
      "M": 12,
      "V": 13,
      "P": 11,
      "S": 14,
      "F": 13
    },
    {
      "Nível": 7,
      "XP": 40000,
      "M": 12,
      "V": 13,
      "P": 11,
      "S": 14,
      "F": 13
    },
    {
      "Nível": 8,
      "XP": 80000,
      "M": 12,
      "V": 13,
      "P": 11,
      "S": 14,
      "F": 13
    },
    {
      "Nível": 9,
      "XP": 160000,
      "M": 10,
      "V": 11,
      "P": 9,
      "S": 12,
      "F": 10
    },
    {
      "Nível": 10,
      "XP": 280000,
      "M": 10,
      "V": 11,
      "P": 9,
      "S": 12,
      "F": 10
    },
    {
      "Nível": 11,
      "XP": 400000,
      "M": 10,
      "V": 11,
      "P": 9,
      "S": 12,
      "F": 10
    },
    {
      "Nível": 12,
      "XP": 520000,
      "M": 10,
      "V": 11,
      "P": 9,
      "S": 12,
      "F": 10
    },
    {
      "Nível": 13,
      "XP": 640000,
      "M": 8,
      "V": 9,
      "P": 7,
      "S": 10,
      "F": 8
    },
    {
      "Nível": 14,
      "XP": 760000,
      "M": 8,
      "V": 9,
      "P": 7,
      "S": 10,
      "F": 8
    }
  ]
  