export interface IState {
    side: string;
}

const defaultState: IState = {
    side: localStorage.getItem('side') || 'neutrally'
};

export default defaultState;
