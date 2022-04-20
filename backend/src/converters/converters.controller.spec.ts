import { Test, TestingModule } from '@nestjs/testing';
import { ConvertersController } from './converters.controller';
import { ConvertersService } from './converters.service';

describe('ConvertersController', () => {
  let controller: ConvertersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvertersController],
      providers: [ConvertersService],
    }).compile();

    controller = module.get<ConvertersController>(ConvertersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // TODO : Write test for pub/sub
  // describe('numberToRoman', () => {
  //   it('should return ?? with 0"', () => {
  //     expect(controller.numberToRoman({ number: 0 })).toBe('??');
  //   });
  //   it('should return IX with 9"', () => {
  //     expect(controller.numberToRoman({ number: 9 })).toBe('IX');
  //   });
  //   it('should return XXVII with 27"', () => {
  //     expect(controller.numberToRoman({ number: 27 })).toBe('XXVII');
  //   });
  //   it('should return C with 100"', () => {
  //     expect(controller.numberToRoman({ number: 100 })).toBe('C');
  //   });
  // });
});
