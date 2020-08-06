import { BaseModel } from './base.model';

export class Establishments extends BaseModel  {
    picture: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    registered: string;
    latitude: string;
    longitude: string;
}
