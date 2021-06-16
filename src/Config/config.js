import Phaser from 'phaser';
import BootScene from './scripts/boot';
import PreloadScene from './scripts/preload';
import TitleScene from './scripts/title';
import CreditsScene from './scripts/credits';
import GameScene from './scripts/game';
import LeaderboardScene from './scripts/leaderboard';

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
