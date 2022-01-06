#language: pt

Funcionalidade: Perfil de usuario

Cenario: Criar cor com sucesso
  Dado que acesso minha tela de login 
  Quando submeto meu usuario de ofertas com os dados validos 
  E sou redirecionado para tela simulação de ofertas
  E clico no menu lateral de cores
  E submeto o cadastro de uma nova cor valida
  Então vejo uma nova cor salva na lista

# Scenario: Tentativa de criar cor
#   Given que acesso minha tela de login 
#   When submeto meu usuario de ofertas com os dados validos 
#   And sou redirecionado para tela simulação de ofertas
#   And clico no menu lateral de cores 
#   And submeto os dados de uma cor invalida
#   '(Esquema de cenarios)'
#   Then vejo a mensagem de alerta

# Scenario: Editar cor com sucesso
#   Given que acesso minha tela de login 
#   When submeto meu usuario de ofertas com os dados validos 
#   And sou redirecionado para tela simulação de ofertas
#   And clico no menu lateral de cores 
#   And clico no icone de editar de uma cor na lista
#   And submeto os dados de uma cor valida  
#   Then vejo a mensagem de sucesso	

# Scenario: Tentativa de editar cor
#   Given que acesso minha tela de login 
#   When submeto meu usuario de ofertas com os dados validos 
#   And sou redirecionado para tela simulação de ofertas
#   And clico no menu lateral de cores 
#   And clico no icone de editar de uma cor na lista
#   And submeto os dados de uma cor invalida
#   '(Esquema de cenarios)'
#   Then vejo a mensagem de alerta	