import Phaser from 'phaser';
import { Player } from '../objects/Player';
import { Ball } from '../objects/Ball';

export class MainScene extends Phaser.Scene {
    private player1!: Player;
    private player2!: Player;
    private ball!: Ball;
    private scoreText!: Phaser.GameObjects.Text;


  constructor() {
    super('MainScene');
  }

  create() {

    this.scoreText = this.add.text(this.scale.width/2, 30, '0 - 0', {fontSize: '32px'}).setOrigin(0.5, 0.5)

    this.registry.set('score',
        {
            player1: 0,
            player2: 0
        }
    );

    this.player1 = new Player(this, 20 , this.scale.height/2);
    this.player2 = new Player(this, this.scale.width - 20 , this.scale.height/2, 2 );
    this.ball = new Ball(this, this.scale.width/2 , this.scale.height/2, [this.player1, this.player2]);
  }

  update(_time: number, _delta: number) {
    this.player1.update(this.ball);
    this.player2.update(this.ball);
    this.ball.update();

    const score = this.registry.get('score');
    
    if (score){
        this.scoreText.setText(
            `${score.player1} - ${score.player2}`
        );
    }
  }
}