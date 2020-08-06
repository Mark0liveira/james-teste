import { Action } from '@ngrx/store';

export enum ActionTypes {
    Add = 'ADD',
    Remove = 'REM',
    Clear = 'CLE',
    Get = 'GET',
}

export const Add = (establishment: any) => {
    return establishment && { type: ActionTypes.Add, payload: establishment } as Action;
};

export const Remove = (establishment: any) => {
    return { type: ActionTypes.Remove, payload: establishment } as Action;
};

export const Clear = () => {
    return { type: ActionTypes.Clear, payload: null } as Action;
};

export const Get = (establishment: any) => {
    return { type: ActionTypes.Get, payload: establishment } as Action;
};
