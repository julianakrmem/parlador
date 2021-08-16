# Parlador

O app foi gerado usando exclusivamente o iOS

O App está apontando para o localhost, sendo que ele feito pelo emulador do iOS, infelizmente não estou conseguindo utilizar um emulador android / celular android para realizar os testes em Android.

Básico para rodar o server

    npm install

Para rodar o backend é necessário rodar primeiro as migrations

    node ace migration:run

o banco escolhido foi o mysql

depois de rodar as migrations é necessário rodar os seeders

    node ace db:seed

após realizar os comandos acima, utilizar o comando abaixo para executar o servidor

    node ace serve --watch