import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Preload' });
  }

  preload() {
    this.load.image('player', 'assets/Player.png');

    this.sectionX = this.cameras.main.centerX;
    this.sectionY = this.cameras.main.centerY;
    this.sectionHeight = this.cameras.main.height;
    const loading = this.add.text(0, 0, '', { fontSize: 24 });

    // update progress percentage
    this.load.on('progress', (value) => {
      loading.setText(`Loading... ${value * 100}%`);
      loading.setPosition(
        this.sectionX - loading.width / 2,
        this.sectionY + this.sectionHeight * 0.05,
      );
    });

    setTimeout(() => {
      this.scene.start('UserInfo');
    }, 1500);
  }

  create() {
    const { sectionX, sectionY, sectionHeight } = this;

    this.add.image(sectionX, sectionY - sectionHeight * 0.05, 'player');
  }

  ready() {
    console.log('Preload is ready ');
  }
}
