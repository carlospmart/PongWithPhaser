import Phaser from "phaser";
import type { Ball } from "./Ball";

export class Player extends Phaser.Physics.Arcade.Sprite {

    private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
    private cursorsT!: {
        W: Phaser.Input.Keyboard.Key;
        S: Phaser.Input.Keyboard.Key;
    };
    private speed: number = 500;
    private player: number | undefined;

    constructor(scene: Phaser.Scene, x: number, y: number, player: number | undefined = undefined) {
        super(scene, x, y, '', player);

        if(player){
            this.player = player;
        }

        if (!this.player) {
            this.speed = 300;
        }

        const graphics = scene.add.graphics();
        graphics.fillStyle(0xffffff, 1);
        graphics.fillRect(0, 0, 20, 100);
        graphics.generateTexture('player', 20, 100);
        graphics.destroy();

        this.setTexture('player');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setImmovable(true);

        this.cursors = scene.input.keyboard?.createCursorKeys();
        this.cursorsT = scene.input.keyboard?.addKeys('W,S') as 
        { W: Phaser.Input.Keyboard.Key; S: Phaser.Input.Keyboard.Key};

        
    }

    update(ball:Ball): void {

        let up:number = 0;
        let down:number = 0;
        if (this.player === 2 ){
            if(this.cursors?.down.isDown){
                down = 1;
            }
            if(this.cursors?.up.isDown){
                up = 1;
            }
        }else if (this.player === 1 ){
            if(this.cursorsT?.S.isDown){
                down = 1;
            }
            if(this.cursorsT?.W.isDown){
                up = 1;
            }
        }else{
            const playerY = this.body!.y;
            const ballY = ball.body!.y;
            
            if (ballY < playerY - 8) {
                up = 1;
            } else if (ballY > playerY + 8) {
                down = 1;
            }
        }
        this.setVelocityY((down - up) * this.speed);
    }
}