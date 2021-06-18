import Phaser from 'phaser';
import BootScene from '../scripts/boot';
import PreloadScene from '../scripts/preload';
import TitleScene from '../scripts/title';
import CreditsScene from '../scripts/credits';
import GameScene from '../scripts/gameScene';
import LeaderboardScene from '../scripts/leaderboards';

const gameContainer = document.getElementById('game');

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
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
