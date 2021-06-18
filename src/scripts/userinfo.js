import Phaser from 'phaser';
import { createUserInputForm } from '../utils/user';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('UserInfo');
  }

  create() {
    this.add.image(300, 200, 'background');
    createUserInputForm();
    this.model = this.sys.game.globals.model;
  }
}
