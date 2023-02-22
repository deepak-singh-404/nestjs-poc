import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { ApiService } from 'src/lib/httpService/api.service';
import { HttpService } from '@nestjs/axios';

@Module({
    // imports: [ApiService],
    providers: [SearchService, HttpService, ApiService],
    controllers: [SearchController]
})
export class SearchModule { }