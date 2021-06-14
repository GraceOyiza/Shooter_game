import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' });
  }

  preload() {
    this.load.image('background', 'assets/background.png');
  }

  create() {
    const cameraX = this.cameras.main.centerX;
    const cameraY = this.cameras.main.centerY;
    const cameraHeight = this.cameras.main.height;

    this.add
      .image(cameraX, cameraY - cameraHeight * 0.15, 'background')
      .setScale(0.8);

    const gameTitle = this.add.text(0, 0, 'Bomb', { fontSize: 32 });
    gameTitle.setPosition(
      cameraX - gameTitle.width / 2,
      cameraY + cameraHeight * 0.15,
    );

    setTimeout(() => {
      this.scene.start('Preload');
    }, 3000);
  }
}
