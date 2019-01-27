import defualtState, {IState} from './default-state';
import ActionNames from './action-names';

const {CHANGE_SIDE} = ActionNames;

export interface IAction {
    type: string;
    side?: string;
}

export default function reducer(state: IState = defualtState, { type, side = 'light' }: IAction) {
    switch (type) {
        case CHANGE_SIDE: {
            return { ...state, side }
        }
        default: {
            return state;
        }
    }
}
