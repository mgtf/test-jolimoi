import {
  Controller,
  Post,
  Body,
  Sse,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ConvertersService } from './converters.service';
import { Query } from './converters.types';
import { Observable } from 'rxjs';

@Controller('converters')
export class ConvertersController {
  constructor(private readonly ConvertersService: ConvertersService) {}

  @Post('numberToRoman')
  numberToRoman(@Body() query: Query): void {
    try {
      this.ConvertersService.numberToRoman(query.number);
    } catch {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: 'Bad request' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Sse('numberToRoman/sub')
  numberToRomanSSE(): Observable<unknown> {
    try {
      return this.ConvertersService.sendEvents();
    } catch {
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: 'Bad request' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
