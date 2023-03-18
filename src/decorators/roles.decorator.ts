import { SetMetadata } from '@nestjs/common';

// eslint-disable-next-line no-shadow
export enum RolesEnum {
  ADMIN = 'admin',
  USER = 'user',
}

export const Roles = (...roles: RolesEnum[]) => SetMetadata('roles', roles);
