import React from 'react';
import {cn} from '@bem-react/classname';


import './Pie.sass';
import {connect} from 'react-redux';

interface IPieProps {
    value: number;
    max?: number;
    description: string;
    side?: string;
}

import {IState} from '../../modules/default-state';

function Pie({value, max = 500, description, side = 'neutrally'}: IPieProps) {
    const cnPie = cn('Pie');
    const modifier = {side};

    return (
        <div className={cnPie()}>
            <div className={cnPie('Ellipse', modifier)}>
                <div className={cnPie('Ellipse', {type: 'wrapper', ...modifier})}>
                    <div className={cnPie('Title', modifier)}>
                        <div className={cnPie('Value', modifier)}>
                            {value}
                        </div>
                        <div className={cnPie('Description', modifier)}>
                            {description}
                        </div>
                    </div>
                    <svg className={cnPie('Chunk', modifier)} height='224' width='224'>
                        <g fill='none' fillRule='evenodd'>
                            <circle
                                className={cnPie('FullRange', modifier)}
                                r='100'
                                cx='112'
                                cy='112'
                                strokeWidth='8'
                                stroke='#2e2e2e'
                            />
                            <circle
                                className={cnPie('Filled', modifier)}
                                r='100'
                                cx='112'
                                cy='112'
                                strokeWidth='16'
                                strokeLinecap='round'
                                strokeDasharray={`${value / max * 300}% 300%`}
                            />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default connect(({side}: IState) => ({side}))(Pie);
