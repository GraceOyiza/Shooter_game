import Phaser from 'phaser';
import BootScene from './scripts/boot';
import PreloadScene from './scenes/preload';
import TitleScene from './scenes/title';
import CreditsScene from './scenes/credits';
import GameScene from './scenes/game';
import LeaderboardScene from './scenes/leaderboard';

const gameContainer = document.getElementById('gameScene');

export default {
  type: Phaser.AUTO,
  width: gameContainer.clientWidth,
  height: gameContainer.clientHeight,
  parent: 'game',
  title: 'Shooter',
  disableContextMenu: true,
  backgroundColor: 0x00000,
  scene: [
    BootScene,
    PreloadScene,
    TitleScene,
    CreditsScene,
    GameScene,
    LeaderboardScene,
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 100 },
      debug: false,
    },
  },
};
