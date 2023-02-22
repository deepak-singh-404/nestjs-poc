import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/lib/httpService/api.service';

@Injectable()
export class SearchService {
    constructor(private readonly apiService: ApiService) {}

    async getData(): Promise<any> {
        return this.apiService.get('https://jsonplaceholder.typicode.com/todos');
      }
}
