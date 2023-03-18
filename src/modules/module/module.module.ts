import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import ImagesController from './module.controller';
import ImagesService from './module.service';

@Module({
  imports: [HttpModule],
  controllers: [ImagesController],
  providers: [ImagesService],
  exports: [ImagesService],
})
export default class ModuleModule {}
