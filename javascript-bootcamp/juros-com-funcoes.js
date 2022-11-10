/* Exercício 03
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de Pagamento:
1 a vista, no débito, recebe 10% de desconto
2 a vista, no dinheiro ou PIX, recebe 15% de desconto
3 em duas vezes, preço normal de etiqueta sem juros
4 acima de duas vezes, preço normal de etiqueta mais juros de 10% */

function calcularPrecoFinal(valor, desconto) {
    return (valor * desconto).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

let PrecoProduto = 100
let FPg = 4

if (FPg === 1) {
    console.log(`Valor a pagar: ${calcularPrecoFinal(PrecoProduto, 0.9)}.`)
} else if (FPg === 2) {
    console.log(`Valor a pagar: ${calcularPrecoFinal(PrecoProduto, 0.85)}.`)
} else if (FPg === 3) {
    console.log(`Valor a pagar: ${calcularPrecoFinal(PrecoProduto, 1)}.`)
} else {
    console.log(`Valor a pagar: ${calcularPrecoFinal(PrecoProduto, 1.1)}.`)
}
    

