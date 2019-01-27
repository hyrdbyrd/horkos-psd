import React from 'react';

import {cn} from '@bem-react/classname';
import {IState} from '../../modules/default-state';

import './Additional.sass';
import {connect} from 'react-redux';

interface IAdditionalProps {
    title: string;
    side?: string;
}

function Additional({title, side}: IAdditionalProps) {
    const cnAdd = cn('Additional');

    return (
        <div className={cnAdd({side})}>
            {title}
        </div>
    );
}

export default connect(({side}: IState) => ({side}))(Additional);
