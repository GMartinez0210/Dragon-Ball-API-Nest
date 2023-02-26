import { Test, TestingModule } from '@nestjs/testing';
import { ControllerProvider } from './controller.provider';

describe('ControllerProvider', () => {
  let service: ControllerProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ControllerProvider],
    }).compile();

    service = module.get<ControllerProvider>(ControllerProvider);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
