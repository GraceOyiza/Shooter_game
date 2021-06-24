import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Title' });
  }

  preload() {
    this.load.image('button', 'assets/button_hover.png');
  }

  create() {
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

    const creditsButton = this.add
      .sprite(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 50,
        'button',
      )
      .setInteractive();
    const creditsText = this.add.text(0, 0, 'Credits', {
      fontSize: 24,
      fill: '#fff',
    });
    Phaser.Display.Align.In.Center(creditsText, creditsButton);
    creditsButton.on('pointerup', () => {
      this.scene.start('Credits');
    });

    const rankingsButton = this.add
      .sprite(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 150,
        'button',
      )
      .setInteractive();
    const rankingsText = this.add.text(0, 0, 'Rankings', {
      fontSize: 24,
      fill: '#fff',
    });
    Phaser.Display.Align.In.Center(rankingsText, rankingsButton);
    rankingsButton.on('pointerup', () => {
      this.scene.start('Leaderboards');
    });
  }
}
