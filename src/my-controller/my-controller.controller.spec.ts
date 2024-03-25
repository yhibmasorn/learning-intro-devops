import { Test, TestingModule } from '@nestjs/testing';
import { MyController as MyController } from './my-controller.controller';

describe('MyController', () => {
  let controller: MyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyController],
    }).compile();

    controller = module.get<MyController>(MyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
