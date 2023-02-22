import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PlatformModule } from './services/platform/platform.module';
import { SearchModule } from './services/search/search.module';

@Module({
  imports: [HttpModule, SearchModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
