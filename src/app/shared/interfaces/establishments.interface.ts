import { BaseInterface } from './base.interface';

export interface EstablishmentInterface extends BaseInterface {
    picture: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    registered: string;
    latitude: string;
    longitude: string;
}
