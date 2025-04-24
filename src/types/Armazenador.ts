export class Armazenador{
    private constructor(){}

    static salvar(chave: string, valor:any): void{
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString); //salvar no localStorage, transformar o que recebe em JSON, e depois armazenar no local storage com o método setItem()
    }

    static obter<T>(chave: string, reviver?: (this: any, key: string, value:any) => any): T | null{ //método que será responsável por resgatar no localStorage as informações do extrato
    // O tipo T é genérico e permite definir o tipo de retorno de um método, podendo ser substituído por qualquer letra.
        //obetendo informações do localStorage
    const valor = localStorage.getItem(chave) // recebe a chave

    //condições
    if(valor === null){
        return null
    }

    if(reviver){
        return JSON.parse(valor, reviver) as T
    }

    return JSON.parse(valor) as T;

    }
}