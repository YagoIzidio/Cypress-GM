
Feature: Login

    Eu como Dealer quero me logar na pagina para poder usar os recursos do perfil Gerente de F&I

    Scenario: Login com sucesso perfil Gerente F&I
    Given que acesso a pagina de login com minhas credenciais validas
    Then sou direcionado para pagina principal

    # Scenario: Login sem sucesso perfil Gerente F&I
    # Given que acesso a pagina de login com minhas credenciais invalidas
    # Then vejo a mensagem de alerta