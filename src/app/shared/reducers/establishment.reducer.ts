import { ActionModel } from './../models/action.model';
import { Establishments } from './../models/establishments.model';
import { ActionTypes } from '../actions/action.establishments';

export const establishment = new Establishments();

// tslint:disable-next-line: typedef
export function establishmentReducer(state, action: ActionModel) {
    switch (action.type) {
        case ActionTypes.Add:
            {
                return 'teste';
            }
        case ActionTypes.Remove:
            {
                return state;
            }
        case ActionTypes.Clear:
            {
                return state;
            }
        case ActionTypes.Get:
            {
                return 'teste';
            }
        default:
            return state;
    }


}
