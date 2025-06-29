# Sorteador de Números Aleatórios

Este projeto é um sorteador de números aleatórios desenvolvido em JavaScript. O usuário pode definir um intervalo e a quantidade de números a serem sorteados, garantindo que não haja repetições.

## 📋 Funcionalidades
- Sorteio de números aleatórios sem repetição.
- Validação de entrada para garantir que os valores informados sejam coerentes.
- Exibição dos números sorteados na tela.
- Botão para reiniciar o sorteio.

## 🚀 Como usar
1. Insira a quantidade de números que deseja sortear no campo **"Quantidade"**.
2. Defina o intervalo de números nos campos **"Do número"** e **"Até o número"**.
3. Clique no botão **"Sortear"** para gerar os números aleatórios.
4. O resultado será exibido na tela.
5. Para reiniciar, clique no botão **"Reiniciar"**.

## 📌 Validações Implementadas
- O valor do campo **"Do número"** deve ser menor que o valor do campo **"Até o número"**.
- A quantidade de números a serem sorteados não pode ser maior que o intervalo definido.
- Números repetidos não são permitidos.

## 🛠 Tecnologias Utilizadas
- **HTML**: Estrutura da interface.
- **CSS**: Estilização da página (não incluída neste código, mas pode ser adicionada).
- **JavaScript**: Lógica de funcionamento do sorteador.

## 📜 Código Principal
O código é composto pelas seguintes funções:

- `sortear()`: Realiza o sorteio dos números e exibe o resultado na tela.
- `alterarStatusBotao()`: Alterna o estado do botão "Reiniciar".
- `obterNumeroAleatorio(min, max)`: Gera um número aleatório dentro do intervalo informado.
- `reiniciar()`: Limpa os campos e reseta o sorteio.

## 📝 Melhorias Futuras
- Adicionar estilização para melhorar a experiência do usuário.
- Permitir exportação dos números sorteados.
- Criar uma interface mais interativa.

## 📄 Licença
Este projeto é de uso livre e pode ser modificado conforme necessário.

## 🚀 Teste aqui
[Clique aqui](https://sorteador-de-numero-omega.vercel.app/)


---

Feito com ❤️ para facilitar sorteios aleatórios!

