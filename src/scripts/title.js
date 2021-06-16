import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Title' });
  }

  preload() {
    this.load.image('button', 'assets/button_hover.png');
  }

  create() {
    // Play button
    const playButton = this.add
      .sprite(
        this.sections.main.centerX,
        this.sections.main.centerY - 50,
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
      if (localStorage.getItem('playerName')) {
        this.scene.start('Game');
      } else {
        const playerForm = document.getElementById('playerForm');
        playerForm.style.display = 'flex';
        playerForm.onsubmit = (e) => {
          e.preventDefault();

          const playerName = document.getElementById('playerName').value;

          localStorage.setItem('playerName', playerName);
          playerForm.style.display = 'none';

          this.scene.start('Game');
        };
      }
    });
  }
}
