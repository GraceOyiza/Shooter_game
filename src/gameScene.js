import Phaser from 'phaser';
import BootScene from './scripts/boot';

const gameContainer = document.getElementById('game');

export default {
  type: Phaser.AUTO,
  width: gameContainer.clientWidth,
  height: gameContainer.clientHeight,
  parent: 'game',
  title: 'Shooter',
  disableContextMenu: true,
  backgroundColor: 0x00000,
  scene: [BootScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 100 },
      debug: false,
    },
  },
};
