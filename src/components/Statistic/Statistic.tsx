import React from 'react';
import { cn } from '@bem-react/classname';

import './Statistic.sass';

import Pie from './Pie';

interface IStatisticProps {
    stats?: {
        [key in 'jedi' | 'droids' | 'battles']: number;
    };
}

export default function Statistic({
    stats = {jedi: 70, droids: 400, battles: 250}
}: IStatisticProps) {
    const cnStat = cn('Statistic');
    const max = Math.max(...Object.values(stats)) * 1.25;

    return (
        <div className={cnStat('Pies')}>
            {Object.entries(stats).map(([desc, value], key) => (
                <Pie max={max} description={desc} value={value} key={key} />
            ))}
        </div>
    );
}
