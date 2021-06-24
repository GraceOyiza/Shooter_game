import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' });
  }

  preload() {
    this.load.image('background', 'assets/space_shooter.png');
  }

  create() {
    const sectionX = this.cameras.main.centerX;
    const sectionY = this.cameras.main.centerY;
    const sectionHeight = this.cameras.main.height;

    this.add
      .image(sectionX, sectionY - sectionHeight * 0.15, 'background')
      .setScale(0.8);

    const gameTitle = this.add.text(0, 0, 'Shooter', { fontSize: 52 });
    gameTitle.setPosition(
      sectionX - gameTitle.width / 2,
      sectionY + sectionHeight * 0.15,
    );

    setTimeout(() => {
      this.scene.start('Preload');
    }, 3000);
  }
}
