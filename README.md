# Pong

Um jogo simples de **Pong** desenvolvido com **Phaser**, **TypeScript** e **Vite**.

Projeto desenvolvido como prática de desenvolvimento de jogos, programação orientada a objetos e utilização da física e dos eventos do Phaser.

##Controles

| Jogador  | Subir | Descer |
| -------- | ----- | ------ |
| Player 1 | `W`   | `S`    |
| Player 2 | `↑`   | `↓`    |

Após um ponto, pressione `Space` para iniciar a bola novamente.

##Tecnologias

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="40" height="40" title="TypeScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg" width="40" height="40" title="Vite" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="40" height="40" title="HTML5" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="40" height="40" title="CSS3" />
</div>

* **Phaser** — criação do jogo e sistema de física
* **TypeScript** — desenvolvimento e tipagem
* **Vite** — ambiente de desenvolvimento e build

## Estrutura do projeto

```text
src/
├── objects/
│   ├── Ball.ts
│   └── Player.ts
│
├── scenes/
│   └── MainScene.ts
│
├── main.ts
└── style.css
```

### `MainScene`

Responsável pela cena principal do jogo, criação dos objetos e atualização do placar.

### `Player`

Representa os jogadores e controla seus movimentos através do teclado.

### `Ball`

Responsável pelo movimento da bola, colisões, reinicialização e atualização da pontuação.

## <img src="https://img.icons8.com/ios-filled/24/rocket.png" width="20" height="20"> Como executar

### Clone o repositório

```bash
git clone https://github.com/carlospmart/PongWithPhaser.git
```

### Entre na pasta

```bash
cd PongWithPhaser
```

### Instale as dependências

```bash
npm install
```

### Inicie o servidor

```bash
npm run dev
```

Depois, acesse o endereço exibido pelo Vite no navegador.

##Conceitos praticados

* Phaser
* TypeScript
* Classes e herança
* Programação orientada a objetos
* Física Arcade
* Colisões
* Eventos do Phaser
* Entrada de teclado
* Movimento e velocidade
* Limites do mundo
* Sistema de pontuação
* Phaser Registry
* Organização de um projeto de jogo

##Status

Projeto desenvolvido para fins de estudo e prática com **Phaser** e **TypeScript**.

Novas funcionalidades podem ser adicionadas conforme o desenvolvimento do projeto.
