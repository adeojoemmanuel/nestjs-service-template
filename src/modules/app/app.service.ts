import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  constructor() {}

  async getAppHealth(): Promise<any> {
    return { status: 'up' };
  }

  async isAppReady(): Promise<boolean> {
    return true;
  }
}
