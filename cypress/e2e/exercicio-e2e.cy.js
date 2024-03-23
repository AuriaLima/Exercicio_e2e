/// <reference types="cypress" />

import produtosPage from "../support/page_objects/produtos.page";

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve buscar um produto com sucesso', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProdutos(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)

            //cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })

        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProdutos(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)

            //cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })

        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProdutos(dados[3].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[3].tamanho,
                dados[3].cor,
                dados[3].quantidade)

            //cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })

        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProdutos(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade)

            //cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('.showlogin').click()
    
        cy.get('#username').type("auria.limabs@gmail.com")
        cy.get('#password').type("teste@123")
        cy.get('.woocommerce-button').click()

        cy.get('#billing_first_name').clear().type('Auria')
        cy.get('#billing_last_name').clear().type('Maria')
        cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').type('Brasil{enter}')
        cy.get('#billing_address_1').clear().type('Rua maria Bonita')
        cy.get('#billing_city').clear().type('Recife')
        cy.get('#billing_state_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').type('Pernambuco{enter}')
        cy.get('#billing_postcode').clear().type('00000-000')
        cy.get('#billing_phone').clear().type('00 00000-0000')
        
        cy.get('#terms').click()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

        });
        

    })






    //it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    //TODO 
    //});
