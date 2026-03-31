const valorConta = 100;
const percentualGorjeta = 15;
const valorGorjeta = valorConta * (percentualGorjeta / 100);
const totalPagar = valorConta + valorGorjeta;

console.log(`Valor da Conta: R$${valorConta}, Gorjeta (15%): R$${valorGorjeta}, Total a pagar: R$${totalPagar}`);