import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="game" class="center">
    
</section>
`

import Phaser from 'phaser';
import { MainScene } from './scenes/MainScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 720,
  height: 540,
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    }
  },
  scene: [MainScene]
};

new Phaser.Game(config);
