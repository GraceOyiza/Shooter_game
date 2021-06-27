import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Credits' });
  }

  preload() {
    this.load.image('button', 'assets/button_hover.png');
  }

  create() {
    const creditsText = this.add.text(0, 0, 'Credits: Grace Popoola', {
      fontSize: '35px',
      fill: '#4BB543',
    });
    creditsText.setPosition(
      this.cameras.main.centerX - creditsText.width / 2,
      150,
    );

    const backButton = this.add
      .sprite(this.cameras.main.centerX, 250, 'button')
      .setInteractive();
    const backText = this.add.text(0, 0, 'Menu', {
      fontSize: 24,
      fill: '#fff',
    });
    Phaser.Display.Align.In.Center(backText, backButton);

    backButton.on('pointerup', () => {
      this.scene.start('Title');
    });
  }
}
