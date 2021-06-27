import Phaser from 'phaser';
import scoreboard from '../api/scoreboard';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Leaderboards' });
  }

  init(data) {
    this.score = data.score;
  }

  preload() {
    this.load.image('button', 'assets/button_hover.png');
  }

  create() {
    const scoreboardList = this.add.text(150, 100, '', {
      fontSize: '35px',
      fill: '#4BB543',
    });
    let scoreboardText = 'High Scores\n\n';

    scoreboard
      .getScores()
      .then((data) => {
        data
          .sort((a, b) => a.score - b.score)
          .reverse()
          .slice(0, 5)
          .forEach((entry) => {
            scoreboardText += `${entry.user}: ${entry.score}\n`;
            scoreboardList.setText(scoreboardText);
          });
      })
      .catch((err) => err);

    const playButton = this.add
      .sprite(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 200,
        'button',
      )

      .setInteractive();
    const text = this.add.text(0, 0, 'Menu', { fontSize: 24, fill: '#fff' });
    Phaser.Display.Align.In.Center(text, playButton);

    playButton.setInteractive();
    playButton.on('pointerup', () => this.scene.start('Title'));
  }
}
