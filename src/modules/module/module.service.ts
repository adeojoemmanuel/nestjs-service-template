/* eslint-disable no-console */
/* eslint-disable no-case-declarations */
import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  HttpException,
} from '@nestjs/common';

@Injectable()
export default class ModuleService {
  constructor(private readonly httpService: HttpService) {}

  public async validateWebHook(hookType: string, data: any): Promise<any> {
    switch (hookType) {
    case 'pre-create':
      const userToken = data.MetaData?.userToken;

      // TODO: added auth validation when service is deployed
      console.debug('Usertoken is', userToken);
      return true;

    case 'pre-finish':
      // TODO: use imageToken to load user
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const imageToken = data.MetaData?.userToken;

      // TODO: uncomment and add real user validation
      const user = { _id: 'tempID' };
      /* if (!user) {
        throw new ForbiddenException('user is not valid');
      }
      */

      const imageData = {
        userId: user._id,
        filename: data.MetaData.filename,
      };

      return {
        imageKey: data.ID,
        userId: imageData.userId,
        filename: imageData.filename,
        size: data.Size || 0,
      };

    default:
      throw new HttpException('Hook type not valid', 400);
    }
  }
}
