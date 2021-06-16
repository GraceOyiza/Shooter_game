import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
    this.baseVelocity = 160;
  }
}
