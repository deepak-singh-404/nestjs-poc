import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SearchService } from './search.service'


@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SearchService) { }

    @Get()
    async searchByMsn(): Promise<any> {
        return this.searchService.getData()
    }
}
