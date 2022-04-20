import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConvertersModule } from './converters/converters.module';

@Module({
  imports: [ConvertersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
