export class ServicoDePagamento{
    #pagamentos

    constructor() {
        this.#pagamentos = [];
    }

    realizarPagamento(codigo, empresa, valor){

        let categoria = '';

        if(valor > 100){
            categoria = 'cara';
        }else{
            categoria = 'padrão';
        }

        this.#pagamentos.push({
            codigoDeBarras: codigo,
            empresa: empresa,
            valor: valor,
            categoria: categoria
        })        

    }

    consultarPagamento(){
        return this.#pagamentos.at(-1);
    }
}
