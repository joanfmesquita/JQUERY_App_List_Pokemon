# JQUERY_App_List_Pokemon

Preparando o Ambiente

Vamos criar um projeto para fixar alguns dos nossos conhecimentos adquiridos no curso.

Até agora estávamos simplesmente abrindo o arquivo no navegador. Como faremos algumas operações com AJAX, será necessário que o nosso código esteja rodando a partir de um servidor, ou então nosso código não funcionará.

Você pode usar o servidor que quiser, como XAMPP. Caso não queira instalar nada, você pode simplesmente criar o projeto em um ambiente online, como o JSFiddle mostrado no começo do curso.

Aqui eu mostrarei como instalar o Node.js e subir um servidor para arquivos estáticos.

Instalação do Node.js no Windows

Você pode baixar o instalador para Windows em: https://nodejs.org

O instalador do Node.js para Windows é bem no estilo de... instaladores Windows! Nós não precisamos fazer maiores configurações no Node.js para este curso, então, você pode ir clicando nos botões “Next” até chegar no botão “Finish” sem maiores preocupações.

Instalação do Node.js no Mac

Se estiver usando o HomeBrew, você pode instalar apenas com o comando abaixo:

$ brew install node.

O HomeBrew é um gerenciador de pacotes para o MacOS, assim como o Aptitude é para sistemas Linux. Você pode conhecer mais sobre o projeto em: http://brew.sh/

Instalação do Node.js no Linux

O Node.js é disponibilizado por um pacote Aptitude para distribuições Linux. Dessa maneira, você pode executar o comando abaixo para fazer a instalação do Node.js:

$ sudo apt-get install nodejs

Instalação do http-server

Agora apenas precisamos instalar o módulo do nosso servidor de arquivos estáticos no Node.js. Para isso usaremos o npm, um gerenciador de pacotes Node.js que é instalado junto com o Node.js. Abra o terminal e execute o comando:

$ npm install -g http-server

O npm (Node Package Manager) é um gerenciador de pacotes específico para o Node.js. Dessa maneira, se você precisa instalar um módulo qualquer no Node.js, você deverá baixar este módulo utilizando o npm. Até mesmo o jQuery pode ser baixado pelo npm.

Na linha de comando acima, o npm irá instalar o http-server globalmente em nossa máquina, permitindo que possamos executar o comando http-server direto do terminal.

Subindo o Servidor

Agora, com o “http-server” instalado, abra o terminal no diretório do projeto e execute o comando:

$ http-server

Um servidor será iniciado. Por padrão, ele estará funcionando na porta “8080”, como indicado na imagem.

Para acessar a página, basta acessar “http://localhost:8080” em seu navegador.
