
Scenario: Criar campanha com sucesso
  Given que acesso minha tela de login 
  When submeto meu usuario de ofertas com os dados validos 
  And sou redirecionado para tela Simulação de ofertas
  And clico no menu lateral de campanhas 
  And submeto os dados de uma campanha valida  
  And clico no botão criar campanha
  Then vejo uma nova campanha salva na lista

Scenario: Tentiva de criar campanha 
  Given que acesso minha tela de login 
  When submeto meu usuario de ofertas com os dados validos 
  And sou redirecionado para tela simulação de ofertas
  And clico no menu lateral de campanhas 
  And submeto os dados de uma campanha invalida
  '(Esquema de cenarios)'
  Then vejo a mensagem de alerta   	

Scenario: Editar campanha com sucesso 
  Given que acesso minha tela de login 
  When submeto meu usuario de ofertas com os dados validos 
  And sou redirecionado para tela simulação de ofertas
  And clico no menu lateral de campanhas 
  And clico no icone de editar de uma campanha na lista
  And submeto os dados de uma campanha valida 
  Then vejo a mensagem de sucesso	

Scenario: Tentiva de editar campanha 
  Given que acesso minha tela de login 
  When submeto meu usuario de ofertas com os dados validos 
  And sou redirecionado para tela simulação de ofertas
  And clico no menu lateral de campanhas 
  And clico no icone de editar de uma campanha na lista
  And submeto os dados de uma campanha invalida
  '(Esquema de cenarios)'
  Then vejo a mensagem de alerta

Scenario: Inativação campanha 
  Given que acesso minha tela de login 
  When submeto meu usuario de ofertas com os dados validos 
  And sou redirecionado para tela simulação de ofertas
  And clico no menu lateral de campanhas 
  And clico no icone de inativar de uma campanha na lista
  Then vejo se o status foi alterado para inativo     