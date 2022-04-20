import { Test, TestingModule } from '@nestjs/testing';
import { ConvertersService } from './converters.service';

describe('ConvertersService', () => {
  let service: ConvertersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvertersService],
    }).compile();

    service = module.get<ConvertersService>(ConvertersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should convert correctly', () => {
    expect(service.numberToRoman(9)).toBe('IX');
    expect(service.numberToRoman(51)).toBe('LI');
    expect(service.numberToRoman(100)).toBe('C');
  });

  // TODO : i18n
  it('should accept only integer', () => {
    expect(() => {
      service.numberToRoman(1.1);
    }).toThrowError('Input must be integer');
  });

  // TODO : i18n
  it('should throw error for invalid value', () => {
    expect(() => {
      service.numberToRoman(101);
    }).toThrowError('Input integer limited to 0 through 100');
    expect(() => {
      service.numberToRoman(-1);
    }).toThrowError('Input integer limited to 0 through 100');
  });
});
