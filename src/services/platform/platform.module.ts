import { Module } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { PlatformController } from './platform.controller';

@Module({
  providers: [PlatformService],
  controllers: [PlatformController]
})
export class PlatformModule {}