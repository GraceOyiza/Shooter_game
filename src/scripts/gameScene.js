import Phaser from 'phaser';
import scoreboard from '../api/scoreboard';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
    this.baseVelocity = 100;
  }

  preload() {
    this.load.image('player', 'assets/Player.png');
    this.load.image('enemy', 'assets/rock_type_planet.png');
    this.load.image('laser', 'assets/LaserPlayer.png');
  }

  create() {
    // Scores
    this.score = 0;
    this.scoreText = this.add.text(5, 5, `Score: ${this.score}`);

    // Player
    this.player = this.physics.add
      .sprite(0, 0, 'player')
      .setPosition(50, 0)
      .setScale(0.8);
    this.player.setBounce(0.1);
    this.player.setCollideWorldBounds(true);

    // Platform (Ground and Sky)
    this.ground = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.height,
      this.cameras.main.width,
      10,
      'transparent',
    );
    this.sky = this.add.rectangle(
      this.cameras.main.centerOnX,
      -10,
      this.cameras.main.width,
      10,
      'transparent',
    );

    this.physics.add.staticGroup(this.sky);
    this.physics.add.staticGroup(this.ground);

    // Enemies
    this.enemies = this.physics.add.group();
    this.time.addEvent({
      delay: 1500,
      callback: () => {
        this.enemies
          .create(Math.random() * this.cameras.main.width, -20, 'enemy')
          .setScale(0.3)
          .setFlipY()
          .setVelocityY(this.baseVelocity + this.score * 0.5);
      },
      callbackScope: this,
      loop: true,
    });

    // Lasers - Weapons
    this.lasers = this.physics.add.group();
    this.time.addEvent({
      delay: 200,
      callback: () => {
        const laser = this.lasers
          .create(
            this.player.x,
            this.player.y - this.player.height / 2,
            'laser',
          )
          .setScale(0.3)
          .setFlipY();
        laser.setVelocityY(-1200);
        laser.setScale(1.25);
      },
      callbackScope: this,
      loop: true,
    });

    // Colliders
    this.physics.add.collider(this.enemies, this.lasers, (enemy, laser) => {
      enemy.destroy();
      laser.destroy();
      this.score += 5;
    });
    this.physics.add.collider(this.sky, this.lasers, (_, laser) => {
      laser.destroy();
    });
    this.physics.add.collider(this.player, this.enemies, () => {
      this.scene.pause();

      // Post player score
      scoreboard.postScore(
        localStorage.getItem('playerName') || 'Anonymous',
        this.score,
      );
      this.scene.stop('GameScene');
      this.scene.switch('GameOver');
    });
    this.physics.add.collider(this.ground, this.enemies, (_, enemy) => {
      enemy.destroy();
    });

    // Cursor
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const velocity = (() => this.baseVelocity + this.score * 0.5)();

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-velocity);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(velocity);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(+velocity);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-velocity);
    } else {
      this.player.setVelocityX(0);
    }

    // Update score
    this.scoreText.setText(`Score: ${this.score}`);
  }
}
