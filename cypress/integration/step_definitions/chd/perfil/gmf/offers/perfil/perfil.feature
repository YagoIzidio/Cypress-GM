#language: pt

Funcionalidade: Perfil de usuario

# Scenario: Criação de perfil com sucesso
#     Given que acesso minha tela de login
#     When submeto meu usuario de provisioning com os dados validos
#     And crio um novo usuario para o perfil de ofertas
#     Then vejo a mensagem de sucesso

# Scenario: Tentativa de criacão de perfil
#     Given que acesso minha tela de login 
#     When submeto meu usuario de provisioning com os dados validos
#     And submeto meu dados completos e invalidos
#     '(Esquema de cenarios)'
#     Then vejo a mensagem de alerta

Cenario: Login perfil de ofertas com sucesso
    Dado que acesso minha tela de login 
    Quando submeto meu usuario de ofertas com os dados validos 
    Então sou redirecionado para tela simulação de ofertas	

Esquema do Cenario: Tentativa de login perfil ofertas
    Dado que acesso minha tela de login 
    Quando submeto meu usuario "<input_user>" e senha "<input_password>" invalidos
    Então vejo a mensagem de alerta "<alert_message>"

    Exemplos:
    |input_user|input_password            |alert_message               |
    |ACCYAG    |{enter}                   |É preciso informar a senha  |  
    |{enter}   |@Yagojoseizidiobarros9623@|É preciso informar o usuário|
    |{enter}   |{enter}                   |É preciso informar o usuário|
    |{enter}   |{enter}                   |É preciso informar a senha  |  
    |YAGO      |123                       |Usuário não encontrado      |
    |YAGO      |@Yagojoseizidiobarros9623@|Usuário não encontrado      |                            
    |ACCYAG    |123                       |Usuário / senha inválido    |

