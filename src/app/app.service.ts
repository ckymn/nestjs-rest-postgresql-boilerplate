import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHomePage(): string {
        return 'Home page';
    }
    getHello(): string {
        return 'Hello World!';
    }
}
