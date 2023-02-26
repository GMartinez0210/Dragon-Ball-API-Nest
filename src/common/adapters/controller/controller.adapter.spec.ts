import { Test, TestingModule } from '@nestjs/testing';
import { ControllerAdapter } from './controller.adapter';

describe('ControllerAdapter', () => {
  let service: ControllerAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ControllerAdapter],
    }).compile();

    service = module.get<ControllerAdapter>(ControllerAdapter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
