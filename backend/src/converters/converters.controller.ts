import {
  Controller,
  Post,
  Body,
  Sse,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConvertersService } from './converters.service';
import { Query } from './converters.types';
import { interval, map, Observable } from 'rxjs';

export interface MessageEvent {
  data: string | object;
  id?: string;
  type?: string;
  retry?: number;
}

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
