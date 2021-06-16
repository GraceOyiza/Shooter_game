import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
    this.baseVelocity = 160;
  }

  preload() {
    this.load.image('player', 'assets/player.png');
    this.load.image('enemy', 'assets/enemy.png');
    this.load.image('laser', 'assets/LaserPlayer.png');
  }

  create() {
    // Scores
    this.score = 0;
    this.scoreText = this.add.text(5, 5, `Score: ${this.score}`);

    // Player
    this.player = this.physics.add
      .sprite(0, 0, 'player')
      .setPosition(this.sections.main.centerX, this.sections.main.centerY)
      .setScale(0.8);
    this.player.setBounce(0.1);
    this.player.setCollideWorldBounds(true);

    // Platform (Ground and Sky)
    this.ground = this.add.rectangle(
      this.sections.main.centerX,
      this.sections.main.height,
      this.sections.main.width,
      10,
      'transparent',
    );
    this.sky = this.add.rectangle(
      this.sections.main.centerOnX,
      -10,
      this.sections.main.width,
      10,
      'transparent',
    );

    this.physics.add.staticGroup(this.sky);
    this.physics.add.staticGroup(this.ground);

    // Enemies
    this.enemies = this.physics.add.group();
    this.time.addEvent({
      delay: 300,
      callback: () => {
        this.enemies
          .create(Math.random() * this.sections.main.width, -20, 'enemy')
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
      leaderboard.postScore.call(this, {
        user: localStorage.getItem('playerName'),
        score: this.score,
      });

      const gameOverText = this.add.text(0, 0, 'GAME OVER', {
        fontSize: 24,
        backgroundColor: 'red',
        padding: 10,
      });
      gameOverText.setPosition(
        this.sections.main.centerX - gameOverText.width / 2,
        this.sections.main.centerY,
      );

      setTimeout(() => {
        this.scene.start('GameOver', { score: this.score });
      }, 1500);
    });
    this.physics.add.collider(this.ground, this.enemies, (_, enemy) => {
      enemy.destroy();
    });

    // Cursor
    this.cursors = this.input.keyboard.createCursorKeys();
  }
}
