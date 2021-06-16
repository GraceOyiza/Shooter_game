import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Title' });
  }

  preload() {
    this.load.image('button', 'assets/button_hover.png');
  }
}
