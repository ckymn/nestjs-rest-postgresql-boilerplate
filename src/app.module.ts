import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { FirstModule } from './first/first.module';

@Module({
    imports: [CatsModule, FirstModule],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        const middleware = [LoggerMiddleware];
        // we have set up the LoggerMiddleware for the /cats route
        consumer
            .apply(...middleware)
            .forRoutes({ path: 'cats', method: RequestMethod.GET });
    }
}
