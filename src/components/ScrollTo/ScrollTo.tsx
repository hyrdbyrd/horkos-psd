import React from 'react';

import arrow from '../../images/arrow.png'

import './ScrollTo.sass'
import { cn } from '@bem-react/classname';

interface IScrollToProps {
    idHref: string;
}

export default function ScrollTo({idHref}: IScrollToProps) {
    const cnScroll = cn('ScrollTo');
    const EllipseClassName = cnScroll('Ellipse');

    return (
        <a href={idHref} className={cnScroll()}>
            <div className={EllipseClassName}>
                <div className={EllipseClassName}>
                    <img src={arrow} className={cnScroll('Btn')} alt='^' />
                </div>
            </div>
        </a>
    )
}
