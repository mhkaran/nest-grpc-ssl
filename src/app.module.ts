import { Module } from '@nestjs/common';
import { HelloWorldService } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [HelloWorldService],
  providers: [AppService],
})
export class AppModule {}
