import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' });
  }

  preload() {
    this.load.image('background', 'assets/background.png');
  }

  create() {
    const sectionX = this.sections.main.centerX;
    const sectionY = this.sections.main.centerY;
    const sectionHeight = this.sections.main.height;

    this.add
      .image(sectionX, sectionY - sectionHeight * 0.15, 'background')
      .setScale(0.8);

    const gameTitle = this.add.text(0, 0, 'Bomb', { fontSize: 32 });
    gameTitle.setPosition(
      sectionX - gameTitle.width / 2,
      sectionY + sectionHeight * 0.15,
    );

    setTimeout(() => {
      this.scene.start('Preload');
    }, 3000);
  }
}
