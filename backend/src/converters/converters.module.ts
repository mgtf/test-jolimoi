import { Module } from '@nestjs/common';
import { ConvertersService } from './converters.service';
import { ConvertersController } from './converters.controller';

@Module({
  providers: [ConvertersService],
  controllers: [ConvertersController],
})
export class ConvertersModule {}
