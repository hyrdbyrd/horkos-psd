import React from 'react';
import {cn} from '@bem-react/classname';

import './Choose.sass';

interface IChooseProps {
    title?: string;
    description?: string;
}

export default function Choose({title = 'Choose your side', description = 'Lorem ipsum dolor sit amet'}: IChooseProps) {
    const cnCh = cn('Choose');
    const cnBtn = cn('Btn');

    return (
        <div className={cnCh()}>
            <div className={cnCh('Intro')}>
                <div className={cnCh('Title')}>
                    {title}
                </div>
                <div className={cnCh('Description')}>
                    {description}
                </div>
            </div>
            <div className={cnCh('Btns')}>
                <div className={cnBtn({side: 'light'}, [cnCh('Btn')])}>
                    Join the light side
                </div>
                <div className={cnBtn({side: 'dark'}, [cnCh('Btn')])}>
                    Join the dark side
                </div>
            </div>
        </div>
    );
}
