import '@babel/polyfill';

import Request from '../src/api/scoreboard';

describe('API Requests', () => {
  describe('Post', () => {
    it('Shoud Post a new highscore', async () => {
      const res = await Request.postScore('test', 20);
      expect(res).toBe(true);
      expect(res).not.toBe(false);
    });

    it('Shoud not post new high score without name', async () => {
      const res = await Request.postScore(20);
      expect(res).toBe(false);
      expect(res).not.toBe(true);
    });

    it('Shoud not post new high score without score', async () => {
      const res = await Request.postScore('tester');
      expect(res).toBe(false);
      expect(res).not.toBe(true);
    });
  });

  describe('Get', () => {
    it('Shoud get all highscores', async () => {
      const res = await Request.getScores();
      expect(Array.isArray(res)).toBe(true);
      expect(Array.isArray(res)).not.toBe(false);
      expect(res.length).toBeGreaterThan(0);
      expect(res.length).not.toBeFalsy();
    });
  });
});
