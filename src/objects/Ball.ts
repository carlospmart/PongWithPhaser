import Phaser from "phaser";

export class Ball extends Phaser.Physics.Arcade.Sprite {

    public isMoving: boolean = false;

    constructor(scene: Phaser.Scene, x: number, y: number, players: Phaser.Physics.Arcade.Sprite[] = []) {
        super(scene, x, y, '');

        this.scene.input.keyboard?.on('keydown', (event: KeyboardEvent) => {
            if (event.code === 'Space' && !this.isMoving) {
                resetBall(this, scene, 1, true);
        }});

        const graphics = scene.add.graphics();
        graphics.fillStyle(0xff0000, 1);
        graphics.fillCircle(8, 8, 8);
        graphics.generateTexture('ball_texture', 16, 16);
        graphics.destroy();

        this.setTexture('ball_texture');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        (this.body as Phaser.Physics.Arcade.Body).onWorldBounds = true;

        this.setBounce(1, 1);

        this.setVelocity(250, 200)
        this.setMaxVelocity(600, 500);

        const score = this.scene.registry.get('score');


        if (players.length > 0){
            players.forEach(player => {
                scene.physics.add.collider(
                    player,
                    this,
                    () => {
                        const speedX:number = Phaser.Math.Between(400, 600);
                        const speedY:number = Phaser.Math.Between(300, 500);
                        this.setVelocityX(this.body!.velocity.x > 0 ? speedX : -speedX);
                        this.setVelocityY(this.body!.velocity.y > 0 ? speedY : -speedY);
                    }
                );
            });
        }

        scene.physics.world.on('worldbounds', (body: any, _up: any, _down: any, left: any, right: any) => {
        
            if (body.gameObject !== this) return;

            if (left) {
                score.player2++;
                console.log(`Player 1: ${score.player1} - Player 2: ${score.player2}`);
                resetBall(this, scene, -1);
            }
            if (right) {
                score.player1++;
                console.log(`Player 1: ${score.player1} - Player 2: ${score.player2}`);
                resetBall(this, scene, 1);
            }
        });



    }

    update(): void {

        if (!this.isMoving) {
            this.setVelocity(0, 0);
        }
    }
}

function resetBall(ball: Ball, scene: Phaser.Scene, direction: number, input: boolean = false): void {
    ball.setPosition(scene.scale.width / 2, scene.scale.height / 2);
    ball.setVelocity(0, 0);

    const directionY = Phaser.Math.Between(-1, 1);
    const speedY = Phaser.Math.Between(300, 500); 
    
    if (input){
        ball.isMoving = true; 
        ball.setVelocity(300 * direction, speedY * directionY);
    }else{
        ball.isMoving = false; 
    }
}