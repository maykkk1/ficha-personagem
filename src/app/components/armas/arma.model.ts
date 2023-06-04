export class Arma {
    nome: string;
    dano: string;
    caracteristicas: string;
    peso: number;
    preco: number;
    imgPath: string;
    quantidade: number;
}

export const listaDeArmas: Arma[] = [
    {
        nome: 'Adaga',
        dano: '1d4',
        caracteristicas: 'Corpo a corpo, longa distância (1,5 m – 3 m / 3 m – 6 m / 6 m – 9 m)',
        peso: 3,
        preco: 10,
        imgPath: 'adaga.webp',
        quantidade: 0
    },
    {
        nome: 'Adaga de prata',
        dano: '1d4',
        caracteristicas: 'Corpo a corpo, longa distância (1,5 m – 3 m / 3 m – 6 m / 6 m – 9 m)',
        peso: 30,
        preco: 10,
        imgPath: 'adagaPrata.webp',
        quantidade: 0
    },
    {
        nome: 'Arco curto',
        dano: '1d6',
        caracteristicas: 'Duas mãos, longa distância (1,5 m – 15 m / 15 m – 30 m / 30 m – 45 m)',
        peso: 25,
        preco: 30,
        imgPath: 'arcoCurto.webp',
        quantidade: 0
    },
    {
        nome: 'Arco longo',
        dano: '1d6',
        caracteristicas: 'Duas mãos, longa distância (1,5 m – 20 m / 20 m – 40 m / 40 m – 65 m)',
        peso: 40,
        preco: 30,
        imgPath: 'arcoLongo.webp',
        quantidade: 0
    },
    {
        nome: 'Arma de haste',
        dano: '1d10',
        caracteristicas: 'Corpo a corpo, duas mãos, escora, lento',
        peso: 7,
        preco: 150,
        imgPath: 'armaHaste.webp',
        quantidade: 0
    },
    {
        nome: 'Azagaia',
        dano: '1d4',
        caracteristicas: 'Longa distância (1,5 m – 9 m / 9 m – 18 m / 18 m – 27 m)',
        peso: 1,
        preco: 20,
        imgPath: 'azagaia.webp',
        quantidade: 0
    },
    {
        nome: 'Besta',
        dano: '1d6',
        caracteristicas: 'Duas mãos, lento, longa distância (1,5 m – 25 m / 25 m – 50 m / 50 m – 75 m), recarregar',
        peso: 30,
        preco: 50,
        imgPath: 'besta.webp',
        quantidade: 0
    },
    {
        nome: 'Cajado',
        dano: '1d4',
        caracteristicas: 'Contusão, corpo a corpo, duas mãos, lento',
        peso: 2,
        preco: 40,
        imgPath: 'cajado.webp',
        quantidade: 0
    },
    {
        nome: 'Clava',
        dano: '1d4',
        caracteristicas: 'Contusão, corpo a corpo',
        peso: 3,
        preco: 50,
        imgPath: 'clava.webp',
        quantidade: 0
    },
    {
        nome: 'Espada',
        dano: '1d8',
        caracteristicas: 'Corpo a corpo',
        peso: 10,
        preco: 60,
        imgPath: 'espada.webp',
        quantidade: 0
    },
    {
        nome: 'Espada curta',
        dano: '1d6',
        caracteristicas: 'Corpo a corpo',
        peso: 7,
        preco: 30,
        imgPath: 'espedaCurta.png',
        quantidade: 0
    },
    {
        nome: 'Espada de duas mãos',
        dano: '1d10',
        caracteristicas: 'Corpo a corpo, duas mãos, lento',
        peso: 15,
        preco: 150,
        imgPath: 'espadaDuasMaos.webp',
        quantidade: 0
    },
    {
        nome: 'Funda',
        dano: '1d4',
        caracteristicas: 'Contusão, longa distância (1,5 m – 12 m / 12 m – 25 m / 25 m – 50 m)',
        peso: 2,
        preco: 20,
        imgPath: '',
        quantidade: 0
    },
    {
        nome: 'Lança',
        dano: '1d6',
        caracteristicas: 'Corpo a corpo, escora, longa distância (1,5 m – 6 m / 6 m – 12 m / 12 m – 18 m)',
        peso: 3,
        preco: 30,
        imgPath: 'lanca.webp',
        quantidade: 0
    },
    {
        nome: 'Lança de cavalaria',
        dano: '1d6',
        caracteristicas: 'Corpo a corpo, investida',
        peso: 5,
        preco: 120,
        imgPath: 'lancaCavalaria.webp',
        quantidade: 0
    },
    {
        nome: 'Machado de guerra',
        dano: '1d8',
        caracteristicas: 'Corpo a corpo, duas mãos, lento',
        peso: 7,
        preco: 50,
        imgPath: 'machadoGuerra.webp',
        quantidade: 0
    },
    {
        nome: 'Machado de mão',
        dano: '1d6',
        caracteristicas: 'Corpo a corpo, longa distância (1,5 m – 3 m / 3 m – 6 m / 6 m – 9 m)',
        peso: 4,
        preco: 30,
        imgPath: 'machadoMao.webp',
        quantidade: 0
    },
    {
        nome: 'Maça',
        dano: '1d6',
        caracteristicas: 'Contusão, corpo a corpo',
        peso: 5,
        preco: 30,
        imgPath: 'maca.webp',
        quantidade: 0
    },
    {
        nome: 'Martelo de guerra',
        dano: '1d6',
        caracteristicas: 'Contusão, corpo a corpo',
        peso: 5,
        preco: 30,
        imgPath: 'marteloGuerra.webp',
        quantidade: 0
    }
];

