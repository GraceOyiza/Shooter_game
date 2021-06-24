import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  preload() {
    this.load.image('button', 'assets/button_hover.png');
  }

  create() {
    const playButton = this.add
      .sprite(
        this.cameras.main.centerX,
        this.cameras.main.centerY - 150,
        'button',
      )
      .setInteractive();
    const playText = this.add.text(100, 0, 'Play', {
      fontSize: 24,
      fill: '#fff',
    });

    Phaser.Display.Align.In.Center(playText, playButton);

    playButton.setInteractive();
    playButton.on('pointerup', () => {
      this.scene.start('GameScene');
    });

    const menuButton = this.add
      .sprite(
        this.cameras.main.centerX,
        this.cameras.main.centerY - 50,
        'button',
      )
      .setInteractive();
    const menuText = this.add.text(0, 0, 'Menu', {
      fontSize: 24,
      fill: '#fff',
    });

    Phaser.Display.Align.In.Center(menuText, menuButton);

    menuButton.setInteractive();
    menuButton.on('pointerup', () => {
      this.scene.start('Title');
    });
  }
}
