// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

const nome = gets();
// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const quantidade = parseInt(gets());

let inventario = [
    { nome: 'espada', quantidade: 1 },
    { nome: 'escudo', quantidade: 1 },
    { nome: 'poção de cura', quantidade: 6 },
    { nome: 'poção de mana', quantidade: 4 },
		{ nome: 'pergaminho', quantidade: 3 }
];

// Utilizamos o metodo JavaScript find() para buscar o primeiro elemento no array que satisfaça a condição especificada por uma função de callback.
let item = inventario.find(item => item.nome === nome);

// TODO: Implemente a condição necessária para a exibição de cada mensagem
switch (item.nome){
case "escudo":
    if(item.quantidade < quantidade){
        print("Indisponível");
    }
    else{
        print("Disponível");
    }
break;
case "espada":
    if(item.quantidade < quantidade){
        print("Indisponível");
    }
    else{
        print("Disponível");
    }
break;
case "poção de cura":
    if(item.quantidade < quantidade){
        print("Indisponível");
    }
    else{
        print("Disponível");
    }
break;
case "poção de mana":
    if(item.quantidade < quantidade){
        print("Indisponível");
    }
    else{
        print("Disponível");
    }
break;
case "pergaminho":
    if(item.quantidade < quantidade){
        print("Indisponível");
    }
    else{
        print("Disponível");
    }
break;
default:
    print("Indisponível");
}
