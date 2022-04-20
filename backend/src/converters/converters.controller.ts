import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConvertersService } from './converters.service';
import { Query } from './converters.types';

@Controller('converters')
export class ConvertersController {
  constructor(private readonly ConvertersService: ConvertersService) {}

  @Post('numberToRoman')
  numberToRoman(@Body() query: Query): string {
    try {
      return this.ConvertersService.numberToRoman(query.number);
    } catch {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: 'Bad request' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
