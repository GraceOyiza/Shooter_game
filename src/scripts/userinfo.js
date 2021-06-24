import Phaser from 'phaser';
import { createUserInputForm } from '../utils/user';

export default class extends Phaser.Scene {
  constructor() {
    super('UserInfo');
  }

  create() {
    this.add.image(300, 200, 'background');
    createUserInputForm();
  }

  update() {
    const formDisplay = document.querySelector('.hide');
    if (formDisplay) {
      this.scene.start('Title');
    }
  }
}
