import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { CatsController } from './cats/cats.controller';

@Module({
    imports: [],
    controllers: [AppController, CatsController],
    providers: [AppService],
})
export class AppModule { }
