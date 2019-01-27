import React from 'react';
import {cn} from '@bem-react/classname';

import './Comment.sass';

export interface ICommentProps {
    side: 'light' | 'dark' | 'neutrally';
    personName: string;
    imagePath?: string;
    from?: string;
    quote: string;
}

export default function Comment({imagePath, quote, personName, side, from}: ICommentProps) {
    const cnComment = cn('Comment');
    const modifier = {side};

    return (
        <div className={cnComment()}>
            <img src={imagePath} className={cnComment('Image', modifier)} />
            <div className={cnComment('Content')}>
                <i className={cnComment('Quote')}>
                    “{quote}”
                </i>
                <div className={cnComment('Author', modifier)}>
                    <b className={cnComment('Person', modifier)}>
                        {personName}
                    </b>, {from}
                </div>
            </div>
        </div>
    );
}
