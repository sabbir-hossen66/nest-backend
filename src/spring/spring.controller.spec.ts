import { Test, TestingModule } from '@nestjs/testing';
import { SpringController } from './spring.controller';

describe('SpringController', () => {
  let controller: SpringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpringController],
    }).compile();

    controller = module.get<SpringController>(SpringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
