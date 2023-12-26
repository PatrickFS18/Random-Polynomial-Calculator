function coeficiente() {
    let x = Math.floor(Math.random() * 10);
    return x;
}
function operator() {
    let plus = '+';
    let less = '-';
    let number = Math.floor((Math.random() * 10) + 1);
    if (number % 2 == 0) {
        return plus;
    } else {
        return less;
    }

}
function grau() {
    return (Math.floor(Math.random() * 10) + 1);
}
function polinomio() {
    let expressao = '';
    let indice = grau();
    for (let i = indice; i > 0; i--) {
        let a = coeficiente();
        let op = operator();
        if (i == 1) {
            expressao += a;
        } else {
            expressao += a + '**' + i + '' + op + '';
        }
    }
    return expressao;
}
function calcular(expressao) {
    expressao = eval(expressao);
    return expressao;
}
x = polinomio(4);
alert('Expressão gerada: \n\n'+x);
alert('Resultado da expressão: '+ calcular(x));

