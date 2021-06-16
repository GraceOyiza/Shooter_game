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
}
