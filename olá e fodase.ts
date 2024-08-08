let idade: number;
idade = 25

let nome: string;
nome = "joão"

let isAtivo: boolean;
isAtivo = true

console.log("Idade:", idade);
console.log("Nome:", nome);
console.log("IsAtivo:", isAtivo);
/////////////////////////////////////////////
interface Usuario {

    nome: string
    idade: number
    email: string

}

let Usuario = {
    nome: "henrique",
    idade: 21,
    email: "henriquegostadebolasgrande@gmail.com"
}

console.log("Usuario:", Usuario)

//////////////////////////////////////

function contamatematica(a: number, b: number): number {
    return a + b;

}

function ola(nome: string): string {
    return 'olá, ${nome}, seja bem-vindo!'
}

console.log("contamatematica:", contamatematica(10, 4));
console.log(ola("Lucas"))
