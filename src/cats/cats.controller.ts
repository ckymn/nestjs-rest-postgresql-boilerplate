import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateCatsDto } from './dto/create-cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatsDto) {
        this.catsService.create(createCatDto);
    }

    @Get('all')
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}
