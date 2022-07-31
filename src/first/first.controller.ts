import { Body, Controller, Get, Param, Post, Query, Redirect } from '@nestjs/common';
import { AppService } from './first.service';
import { createFirstDto } from './dto/create-first.dto';

@Controller('first')
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHomePage(): string {
        return this.appService.getHomePage();
    }

    @Get('hello')
    getHello(): string {
        return this.appService.getHello();
    }
    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params);
        return `This action returns a #${params.id} cat`;
    }
    @Post()
    async create(@Body() createFirstDto: createFirstDto): Promise<string> {
        return 'This action adds a new cat';
    }
}
