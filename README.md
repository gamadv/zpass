<div align=center>
  <img src="public/password.svg" width=70 height=70 />
</div>

<h1 align=center> ZPass
  <br />
  Validador de Senhas
</h1>



<div align=center>

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white) ![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

</div>


# 📖 Sobre o projeto
Este projeto (apelidado carinhosamente de ZPass) visa realizar a validação de uma senha, após um problema detectado, e após validação é feito envio da senha fornecida pelo usuário, caso seja válida, poderá submeter o formulário. Caso inválida, informará ao usuário quais regras foram violadas.

Há também tratativas de erros para os demais campos.

Imagens sobre a responsividade:
<details>
  <summary>
      <strong>Desktop</strong>
  </summary>
  <img src="readme-assets/Screenshot_1.png" />

</details>
<details>
  <summary>
      <strong>Mobile</strong>
  </summary>
  <img src="readme-assets/Screenshot_5.png" />

</details>

<!-- ## Desktop -->
<!-- <img src="instructions/readme-assets/Screenshot_1.png" /> -->
<br />
<br />



# 🛠️ Tecnologias
* **Vite** com Typescript
* **React Hook Form** + Zod para validação e manipulação do formulário
* **Axios** para realizar requisições
* **Vitest** como Lib de tests
* **React-Router-DOM** para roteamento da aplicação.
* **Cypress** para melhor experiência em testes E2E

PS: Como não houve componentes genéricos ou reutilizáveis, não foi criado a famosa pasta src/components.

<br />

# ⚙️ Rodando o projeto

Para rodar Local, basta seguir os passos abaixo.

(Considerando já ter clonado repo, e com Node instalado na máquina)

Dependencias:

```bash
  $ npm install

  # or

  $ yarn
```

For Cypress on WSL or Ubuntu, must install:

```bash
  $ sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

Após download, basta rodar

```bash
  $ npm run dev

  # or

  $ yarn dev
```

Projeto abrirá na porta:

<img src="readme-assets/Screenshot_2.png" />

# 🧪 Sobre Tests:
Foi criado testes unitários para cobrir possíveis cenários para o Validador de Senhas utilizado na aplicação:

```bash
  $ npm run test

  # or

  $ yarn test
```

<img src="readme-assets/Screenshot_3.png" />

É possível validar os cenários quanto a requisição trocando o Network para **SLOW 3G**, com isso conseguirá visualizar os campos desabilitados durante o envio

Para visualizar as mensagens de falha da requisição (CATCH), basta trocar as linhas desse arquivo: <i><kbd> [urls.ts](./src/constants/urls.ts)</i>
<br/>
Ou seja, modificando a API para uma que não existe, para verificar as tratativas de erro:

<img src="readme-assets/Screenshot_4.png" />





<br />
<br />
<br />

## Testes E2E
Basta rodar o projeto em conjunto com outro terminal com:
```bash
  $ npm run test:cy
```
Abrirá a GUI do Cypress, basta seguir esse caminho:

``
E2E Testing > Start E2E in (Browser de preferência) > Arquivo com testes: "formValidation.spec.cy.ts
``

</details>
<details>
  <summary>
      <strong>Passo a Passo em imagens</strong>
  </summary>
  <img src="readme-assets/Screenshot_6.png" />
  <img src="readme-assets/Screenshot_7.png" />
  <img src="readme-assets/Screenshot_8.png" />

</details>
<br />



Após isso ele abrirá e executará os testes que estão nesse arquivo: <i><kbd> [formValidation.spec.cy.ts](./cypress/e2e/formValidation.spec.cy.ts)</i>


<img src="readme-assets/Screenshot_9.png" />



<p align=center>
  <h6 align=center>💙 Made by 💙</h6>
  <h2 align=center>
  <a href="https://www.linkedin.com/in/gama-leal">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" width=70>
    Moacir Gama
  </a>
  </h2>
</p>
