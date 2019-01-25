import React from 'react';
import {cn} from '@bem-react/classname';

import './Comment.sass';

export interface ICommentProps {
    side: 'light' | 'dark';
    personName: string;
    imagePath?: string;
    from?: string;
    quote: string;
}

export default function Comment({imagePath, quote, personName, side, from}: ICommentProps) {
    const cnComment = cn('Comment');

    return (
        <div className={cnComment()}>
            <img src={imagePath} className={cnComment('Image')} />
            <div className={cnComment('Content')}>
                <div className={cnComment('Quote')}>
                    “{quote}”
                </div>
                <div className={cnComment('Author', {side})}>
                    <span className={cnComment('Person', {side})}>
                        {personName}
                    </span>, {from}
                </div>
            </div>
        </div>
    );
}
