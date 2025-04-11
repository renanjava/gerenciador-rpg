<h1>🛠️ Atividade CRUD (Problemática)</h1>
<p><strong>📅 Data Limite Entrega:</strong> 23:59 - 13/Abril/2025</p>

<h2>📌 Definições</h2>
<ul>
  <li>A atividade <strong>não será extra</strong>, mas sim um percentual <strong>descontado da nota final</strong>.</li>
  <li>Nota máxima: <strong>0%</strong> | Nota mínima: <strong>25%</strong></li>
  <li><strong>Proibido</strong> o uso de ferramentas de IA (ex: ChatGPT) – uso implica nota <strong>automática de 25%</strong></li>
  <li>Entrega via <strong>Forms</strong> (disponibilizado em 08/Abr); fora do prazo <strong>não será aceita</strong></li>
  <li><strong>Obrigatório</strong> uso de repositório GitHub</li>
  <li>Aplicação dos conceitos de <strong>POO</strong></li>
  <li>Atividade <strong>individual</strong>; entregas iguais ou plágio resultam em nota <strong>25%</strong></li>
</ul>

<h2>📊 Critérios de Avaliação</h2>
<ul>
  <li><strong>00%</strong> - CRUD funcional + métricas aplicadas corretamente</li>
  <li><strong>05%</strong> - CRUD funcional + métricas mal aplicadas</li>
  <li><strong>10%</strong> - CRUD funcional + nenhuma métrica aplicada</li>
  <li><strong>25%</strong> - CRUD <u>não</u> funcional + métricas aplicadas</li>
  <li><strong>25%</strong> - CRUD <u>não</u> funcional + métricas mal aplicadas</li>
  <li><strong>25%</strong> - CRUD <u>não</u> funcional + nenhuma métrica aplicada</li>
</ul>
<p><strong>⚠️ Descumprimento do enunciado = 25% de nota</strong></p>

<h2>🎮 Problemática</h2>
<p>Você foi contratado para desenvolver um sistema de gerenciamento para um <strong>jogo de RPG</strong>.</p>
<p>O sistema deve permitir o gerenciamento de <strong>Personagens</strong> e <strong>Itens Mágicos</strong>.</p>
<p>Cada Personagem pode possuir vários Itens Mágicos, e cada Item Mágico está associado a um Personagem.</p>

<h3>📋 Entidades e Atributos</h3>

<h4>🧝‍♂️ Personagem</h4>
<h5>🧾 Definições</h5>
<ul>
  <li>Na criação, o Personagem possui <strong>10 pontos</strong> para distribuir entre <strong>Força</strong> e <strong>Defesa</strong>.</li>
  <li>Esses pontos devem respeitar o limite (ex: 5/5, 6/4, 10/0).</li>
  <li>Na exibição, os atributos de Força e Defesa devem <strong>incluir os bônus dos Itens Mágicos</strong>.</li>
  <li><strong>Somente</strong> as classes listadas podem ser utilizadas:</li>
  <ul>
    <li>Guerreiro</li>
    <li>Mago</li>
    <li>Arqueiro</li>
    <li>Ladino</li>
    <li>Bardo</li>
  </ul>
  <li>O personagem só pode ter <strong>1 Amuleto</strong>.</li>
</ul>

<h5>🔖 Atributos do Personagem</h5>
<ul>
  <li>Identificador</li>
  <li>Nome</li>
  <li>Nome Aventureiro</li>
  <li>Classe</li>
  <li>Level</li>
  <li>Lista de Itens Mágicos</li>
  <li>Força</li>
  <li>Defesa</li>
</ul>

<h4>🔮 Item Mágico</h4>
<h5>🧾 Definições</h5>
<ul>
  <li>Somente os tipos abaixo são válidos:</li>
  <ul>
    <li>Arma</li>
    <li>Armadura</li>
    <li>Amuleto</li>
  </ul>
  <li><strong>Arma:</strong> Defesa obrigatoriamente 0</li>
  <li><strong>Armadura:</strong> Força obrigatoriamente 0</li>
  <li><strong>Amuleto:</strong> Pode ter Força e Defesa, mas <strong>apenas 1 por personagem</strong></li>
  <li>Força e Defesa máximas: <strong>10</strong></li>
  <li>Não pode existir item com <strong>Força 0 e Defesa 0</strong></li>
</ul>

<h5>🔖 Atributos do Item Mágico</h5>
<ul>
  <li>Identificador</li>
  <li>Nome</li>
  <li>Tipo do Item</li>
  <li>Força</li>
  <li>Defesa</li>
</ul>

<h2>⚙️ Features Requeridas</h2>
<p>As funcionalidades abaixo devem ser mapeadas (via Swagger, README, Postman etc):</p>

<ul>
  <li>Cadastrar Personagem</li>
  <li>Cadastrar Item Mágico</li>
  <li>Listar Personagem</li>
  <li>Buscar Personagem por Identificador</li>
  <li>Atualizar Nome Aventureiro por Identificador</li>
  <li>Remover Personagem</li>
  <li>Adicionar Item Mágico</li>
  <li>Listar Itens Mágicos</li>
  <li>Buscar Item Mágico por Identificador</li>
  <li>Adicionar Item Mágico ao Personagem</li>
  <li>Listar Itens Mágicos por Personagem</li>
  <li>Remover Item Mágico do Personagem</li>
  <li>Buscar Amuleto do Personagem</li>
</ul>
