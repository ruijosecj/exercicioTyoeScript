const multiplicacao = (x: number, y: number): number => {
    return x * y;
}

console.log(`Resultado da multiplicação = ${multiplicacao(10,6)}`)

const saudacao = (nome: string): string => {
    return `${nome}, tudo bem com você?`;
}

console.log(saudacao('Rui'))