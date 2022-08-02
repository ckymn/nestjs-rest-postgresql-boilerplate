import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateCatsDto } from './dto/create-cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Get()
    async getCatsHomePage(): Promise<string> {
        return 'This is the cats home page';
    }
    @Post()
    async create(@Body() createCatDto: CreateCatsDto) {
        this.catsService.create(createCatDto);
    }

    @Get('all')
    async findAll(): Promise<Cat[]> {
        const cats = this.catsService.findAll();
        if (!cats) {
            throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
        }
        return cats;
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Cat> {
        return this.catsService.findOne(id);
    }
}
