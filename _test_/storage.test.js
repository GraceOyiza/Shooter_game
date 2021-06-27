import { saveNameTolocalstorage, getName } from '../src/utils/storage';

describe('LocalStorage', () => {
  it('Should set given name to local storage', () => {
    saveNameTolocalstorage('Tester');
    const name = localStorage.getItem('playerName');
    expect(name).toEqual('Tester');
    expect(name).not.toEqual('');
  });

  it('Should set name to Anonymous when no name is given', () => {
    saveNameTolocalstorage();
    const name = localStorage.getItem('playerName');
    expect(name).toEqual('Anonymous');
    expect(name).not.toEqual('Tester');
  });

  it('Should get user name', () => {
    saveNameTolocalstorage('MY TESTER');
    const name = getName();
    expect(name).toEqual('MY TESTER');
    expect(name).not.toEqual('');
  });
});
