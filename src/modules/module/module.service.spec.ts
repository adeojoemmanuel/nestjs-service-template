/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { HttpException } from '@nestjs/common';

import ImagesService from './module.service';

const probe = require('probe-image-size');

jest.mock('./helpers/image', () => ({
  getImageMetadata: () => {
    return {
      width: 100,
      height: 100,
    };
  },
  getUserFileLocation: (key: string, userId: string) => 'urls',
  getImageUrl: () => 'url',
}));

jest.mock('./helpers/gCloudStorage', () => ({
  gsGetStream: (x: any) => 'url',
  gsMoveFile: jest
    .fn()
    .mockResolvedValueOnce('url')
    .mockResolvedValueOnce('url')
    .mockRejectedValue('false'),
}));

jest.mock('probe-image-size', () => jest.fn());

probe
  .mockReturnValueOnce({
    width: 1000,
    height: 1000,
  })
  .mockReturnValueOnce({
    width: 1000,
    height: 1000,
  })
  .mockReturnValueOnce(false)
  .mockReturnValue(true);

describe('ImagesService', () => {
  let service: ImagesService;

  const mockHttpService = {
    axiosRef: {
      post: jest
        .fn()
        .mockRejectedValueOnce({ data: { id: 'usertokenmock' } })
        .mockResolvedValue({ data: { id: 'usertokenmock' } }),
      get: jest
        .fn()
        .mockResolvedValueOnce(false)
        .mockResolvedValue({ data: { _id: 'id' } }),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ImagesService,
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
      ],
    }).compile();

    service = module.get<ImagesService>(ImagesService);
  });
});
