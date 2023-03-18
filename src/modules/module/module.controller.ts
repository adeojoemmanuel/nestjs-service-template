import {
  Body,
  Controller,
  Post,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Request } from 'express';

import WrapResponseInterceptor from '@interceptors/wrap-response.interceptor';
import ImagesService from './module.service';

@ApiTags('Users')
@ApiBearerAuth()
@UseInterceptors(WrapResponseInterceptor)
@Controller()
export default class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @ApiOkResponse({
    description: '200. Success. Returns operation result',
    schema: {
      type: 'object',
      properties: {},
    },
  })
  @ApiUnauthorizedResponse({
    schema: {
      type: 'object',
      example: {
        message: 'string',
      },
    },
    description: '401. UnauthorizedException.',
  })
  @Post('webhook')
  async validateWebHook(@Body() body: any, @Req() request: Request) {
    return this.imagesService.validateWebHook(
      request?.headers['hook-name'] as string,
      body.Upload,
    );
  }
}
