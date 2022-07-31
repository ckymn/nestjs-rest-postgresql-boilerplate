import { Module } from '@nestjs/common';
import { AppController } from './first.controller';
import { AppService } from './first.service';

@Module({
    controllers: [AppController],
    providers: [AppService],
})
export class FirstModule { }