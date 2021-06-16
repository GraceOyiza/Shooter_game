import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  init(data) {
    this.score = data.score;
  }

  preload() {
    this.load.image('button', 'assets/button_hover.png');
  }

  create() {
    const scoreboardList = this.add.text(0, 0, '');
    let scoreboardText = 'RANKINGS';

    scoreboard
      .getScores()
      .then((data) => {
        data.result
          .sort((a, b) => a.score - b.score)
          .reverse()
          .splice(0, 6)
          .forEach((entry) => {
            scoreboardText += `${entry.user}: ${entry.score}\n`;
            scoreboardList.setText(scoreboardText);
            scoreboardList.setPosition(
              this.section.main.centerX - scoreboardList.width / 2,
              this.section.main.centerY - scoreboardList.height / 2,
            );
          });
      })
      .catch((err) => err);
  }
}
