import { ObjectId, Types } from 'mongoose';

export interface Image {
  readonly _id: Types.ObjectId;
  readonly url: string;
  readonly userId: ObjectId;
  readonly filename: string;
  readonly extension: string;
  readonly width: number;
  readonly height: number;
  readonly nsfw: boolean;
  readonly size: number;
  readonly key: string;
  readonly creationDate?: Date;
}
