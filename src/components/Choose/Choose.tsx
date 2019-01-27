import React from 'react';
import {connect} from 'react-redux';

import ActionNames from '../../modules/action-names';
import {changeSide} from '../../modules/actions';
import {IAction} from '../../modules/reducer';

import {cn} from '@bem-react/classname';

import './Choose.sass';

interface IChooseProps {
    side?: string;
    changeSide?: (action: IAction) => IAction;
}

const {CHANGE_SIDE} = ActionNames;

function Choose({changeSide = (a) => a}: IChooseProps) {
    const cnCh = cn('Choose');
    const cnBtn = cn('Btn');

    function onClick(side: string) {
        return function() {changeSide({type: CHANGE_SIDE, side})};
    }

    return (
        <div className={cnCh('Btns')}>
            <div onClick={onClick('light')} className={cnBtn({side: 'light'}, [cnCh('Btn')])}>
                Join the light side
            </div>
            <div onClick={onClick('neutrally')} className={cnBtn({ side: 'neutrally' }, [cnCh('Btn')])}>
                Join the dark side
            </div>
            <div onClick={onClick('dark')} className={cnBtn({side: 'dark'}, [cnCh('Btn')])}>
                Join the dark side
            </div>
        </div>
    );
}

export default  connect(() => ({}), ({changeSide}))(Choose);
