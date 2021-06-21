import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  preload() {
    this.load.image('button', 'assets/button_hover.png');
  }

  create() {
    // Play button
    const playButton = this.add
      .sprite(
        this.cameras.main.centerX,
        this.cameras.main.centerY - 50,
        'button',
      )
      .setInteractive();
    const playText = this.add.text(0, 0, 'Play', {
      fontSize: 24,
      fill: '#fff',
    });
    Phaser.Display.Align.In.Center(playText, playButton);

    playButton.setInteractive();
    playButton.on('pointerup', () => {
      this.scene.start('GameScene');
    });
  }
}
