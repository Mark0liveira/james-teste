import { EstablishmentsComponent } from './establishments/establishments.component';
import { EstablishmentsDetailsComponent } from './establishment-details/establishment-details.component';
export const EstablishmentRoutes  = [
    {
        path: 'list',
        component: EstablishmentsComponent
    },
    {
        path: 'details',
        component: EstablishmentsDetailsComponent
    }
];
