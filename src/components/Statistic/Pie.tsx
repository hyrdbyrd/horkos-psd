import React from 'react';
import {cn} from '@bem-react/classname';

import './Pie.sass';

interface IPieProps {
    value: number;
    max?: number;
    description: string;
}

export default function Pie({value, max = 500, description}: IPieProps) {
    const cnPie = cn('Pie');

    return (
        <div className={cnPie()}>
            <div className={cnPie('Ellipse')}>
                <div className={cnPie('Ellipse', {type: 'wrapper'})}>
                    <div className={cnPie('Title')}>
                        <div className={cnPie('Value')}>
                            {value}
                        </div>
                        <div className={cnPie('Description')}>
                            {description}
                        </div>
                    </div>
                    <svg className={cnPie('Chunk')} height='224' width='224'>
                        <g fill='none' fillRule='evenodd'>
                            <circle
                                r='100'
                                cx='112'
                                cy='112'
                                strokeWidth='8'
                                stroke='#2e2e2e'
                            />
                            <circle
                                r='100'
                                cx='112'
                                cy='112'
                                strokeWidth='16'
                                stroke='#05e7e6'
                                strokeLinecap='round'
                                strokeDasharray={`${value / max * 300}% 300%`}
                                style={{transformOrigin: '50% 50%', transform: 'rotate(64deg)'}}
                            />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}
