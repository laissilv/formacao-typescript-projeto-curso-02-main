export function ValidaDebito(target: any, propertykey: string, descriptor: PropertyDescriptor) {
    //targe recebe o primeiro valor, propertykey é o metodo, descriptor: tipo do metodo

    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDebito: number) {
        if (valorDoDebito <= 0) {
            throw new Error("O valor a ser debitadp precisa ser maior do que zero!")
        }
        if (valorDoDebito > this.saldo) {
            throw new Error("Seu saldo é insuficente para realizar a operação!")
        }
        return originalMethod.apply(this, [valorDoDebito]);
    }
    return descriptor;
}

export function VAlidaDeposito(targe: any, propertykey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDeposito: number) {
        if (valorDoDeposito <= 0) {
            throw new Error("O vallor a ser depositado deve ser maior do que zero!");
        }
        return originalMethod.apply(this, [valorDoDeposito]);
    }
    return descriptor;
}
