import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Preload' });
  }

  preload() {
    this.load.image('playerShip', 'assets/Player.png');

    this.sectionX = this.sections.main.centerX;
    this.sectionY = this.sections.main.centerY;
    this.sectionHeight = this.sections.main.height;
    const loading = this.add.text(0, 0, '', { fontSize: 24 });

    // update progress percentage
    this.load.on('progress', (value) => {
      loading.setText(`Loading... ${value * 100}%`);
      loading.setPosition(
        this.sectionXloading.width / 2,
        this.sectionY + this.sectionHeight * 0.05,
      );
    });

    setTimeout(() => {
      this.scene.start('Title');
    }, 1500);
  }
}
