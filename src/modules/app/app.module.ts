import { Module } from '@nestjs/common';
import { Routes, RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

import AppController from './app.controller';
import AppService from './app.service';
import ModuleModule from '../module/module.module';

const routes: Routes = [
  {
    path: '/',
    children: [{ path: '/images', module: ModuleModule }],
  },
];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ModuleModule,
    RouterModule.register(routes),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export default class AppModule {}
