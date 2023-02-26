import { Test, TestingModule } from '@nestjs/testing';

describe('AppController', () => {
  describe('root', () => {
    it('Creates a Nest application', async () => {
      const app: TestingModule = await Test.createTestingModule({}).compile();
      expect(app.createNestApplication()).toBe(true);
    });
  });
});
