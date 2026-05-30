import { ServicoDePagamento } from "../src/servicoDePagamento.js";
import assert from 'node:assert';

describe('Classe de Serviço de Pagamento', () => {

    it('Deve retornar a categoria "padrão" se o valor do pagamento for menor que 100.00', function(){

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.realizarPagamento('212-3546-798', 'Internet', 99.99);
        const pagamento = servicoDePagamento.consultarPagamento();

        // Assert
        assert.equal(pagamento.codigoDeBarras, '212-3546-798');
        assert.equal(pagamento.categoria, 'padrão');
    })

   it('Deve retornar a categoria "cara" se o valor do pagamento for maior que 100.00', function(){

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.realizarPagamento('123-4567-890', 'Centerplex', 100.01);
        const pagamento = servicoDePagamento.consultarPagamento();

        // Assert
        assert.equal(pagamento.codigoDeBarras, '123-4567-890');
        assert.equal(pagamento.categoria, 'cara');
    })
    
    it('Deve retornar o último pagamento realizado', function(){      
        
         // Arrange
        const servicoDePagamento = new ServicoDePagamento();
        servicoDePagamento.realizarPagamento('098-7654-321', 'Casas Bahia', 2590.98);
        
        // Act
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoDeBarras, '098-7654-321');
        assert.equal(ultimoPagamento.empresa, 'Casas Bahia');
        assert.equal(ultimoPagamento.valor, 2590.98);
        assert.equal(ultimoPagamento.categoria, 'cara');
    })
})