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
    const scoreboardList = this.add.text(0, 0, '', {
      fontSize: '35px',
      fill: '#4BB543',
    });
    let scoreboardText = 'Top 5 Scores\n\n\n ';

    scoreboard
      .getScores()
      .then((data) => {
        data
          .sort((a, b) => a.score - b.score)
          .reverse()
          .splice(0, 6)
          .forEach((entry) => {
            console.log(entry);
            scoreboardText += `${entry.user}: ${entry.score}\n`;
            scoreboardList.setText(scoreboardText);
            scoreboardList.setPosition(
              this.section.main.centerX - scoreboardList.width / 2,
              this.section.main.centerY - scoreboardList.height / 2,
            );
          });
      })
      .catch((err) => err);

    // Play again button
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
