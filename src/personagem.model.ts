export class Personagem {
    nome: string;
    titulo: string;
    alinhamento: string;
    vida: number;
    vidaMaxima: number;
    xp: number;
    xpParaUpar: number;
    atributos: Atributos;
    protecoes: Protecoes;
    moedas: Moedas;
    classeArmadura: string;
    classeArmaduraValor: number;
    meleeMod: number;
    rangedMod: number;
    modificadorDeContituicaoVida: number;
    sa: number;
    modificadorDexArmadura: number;
}

export class Atributos {
    forca: number;
    inteligencia: number;
    sabedoria: number;
    destreza: number;
    constituicao: number;
    carisma: number;
}

export class Protecoes {
    m: number;
    v: number;
    p: number;
    s: number;
    f: number;
    sabedoriaMod: number;
}

export class Moedas {
    platina: number;
    ouro: number;
    electrum: number;
    prata: number;
    cobre: number;
}