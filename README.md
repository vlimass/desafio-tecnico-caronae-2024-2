# Desafio Técnico Caronaê

Este projeto trata-se do desafio técnico desenvolvido durante o processo seletivo da extensão **Caronaê da UFRJ**, responsável pela construção de uma aplicativo de caronas solidárias para o campus do Fundão. O objetivo foi criar uma aplicação web front-end que consumisse os dados da API Rest, disponibilizada em [https://mocki.io/v1/753cf50d-4bec-427f-bd07-e49387240ee3](https://mocki.io/v1/753cf50d-4bec-427f-bd07-e49387240ee3). A aplicação desenvolvida foi publicada e pode ser acessada em [https://desafio-tecnico-caronae-2024-2.vercel.app/](https://desafio-tecnico-caronae-2024-2.vercel.app/).

### 🛠 Tecnologias utilizadas

* [TypeScript](https://www.typescriptlang.org/)
* [React](https://react.dev/)
* [Vite](https://vitejs.dev/)
* [TailwindCSS](https://tailwindcss.com/) 
* [Docker](https://www.docker.com/)
* [Vercel](https://vercel.com/home)

### 🐳 Como rodar o projeto?

Primeiramente, é necessário ter o `docker` instalado e em execução em sua máquina (pode ser que seja necessária a criação de uma conta na plataforma *Docker* para a utilização do serviço). É possível verificar se o Docker está instalado e rodando por meio dos seguintes comandos: 
```
docker ps 
\* ou *\
docker info
```

Uma vez que o serviço do Docker está instalado e rodando, faremos um `git clone` do projeto (O código a seguir considera uma clonagem no Github por chave SSH):
```
git clone git@github.com:vlimass/desafio-tecnico-caronae-2024-2.git
```

O próximo passo é entrar na pasta do projeto clonado e executar o comando `docker build` para criar a imagem Docker: 
```
cd desafio-tecnico-caronae-2024-2 
docker build -t desafio-tecnico-caronae . 
```

Por fim, basta executar o comando `docker run` para rodar o container Docker referente ao projeto: 
```
docker run -d --name desafio-tecnico-caronae -p 5173:5173 desafio-tecnico-caronae
```

Tudo pronto! Sua aplicação front-end `Desafio Técnico Caronaê` já está rodando e você pode acessá-la através de seu navegador em http://localhost:5173/.

### 📸 Preview do projeto

<hr>
<div align="center">made with 🤍 by viny</div>