import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PlatformService } from './platform.service'


@Controller('platform')
export class PlatformController {
    constructor(private readonly platformService: PlatformService) { }

    @Get()
    async platformApi(): Promise<any> {
        return "ITS AN PLATFORM SERVICE"
    }
}
