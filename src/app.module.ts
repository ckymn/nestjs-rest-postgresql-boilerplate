import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { FirstModule } from './first/first.module';

@Module({
    imports: [CatsModule, FirstModule],
})
export class AppModule { }
