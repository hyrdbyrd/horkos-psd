import {IAction} from './reducer';

export const changeSide = (action: IAction) =>
    (localStorage.setItem('side', action.side || 'neutrally'), action);
