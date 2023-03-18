import _ from 'lodash';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { RolesEnum } from '@decorators/roles.decorator';

@Injectable()
export default class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<RolesEnum[]>(
      'roles',
      context.getHandler(),
    );

    if (_.isEmpty(roles)) {
      return true;
    }

    return true;
  }
}
