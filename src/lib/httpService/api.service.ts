import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'

@Injectable()
export class ApiService {
    constructor(private readonly httpService: HttpService) { }

    async get(url: string, params?: object): Promise<any> {
        return this.httpService.get(url, { params });
    }

    async post(url: string, body: object): Promise<any> {
        return this.httpService.post(url, body);
    }
}