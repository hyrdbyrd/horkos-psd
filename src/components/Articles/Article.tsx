import React from 'react';
import {cn} from '@bem-react/classname';

import './Article.sass';

export interface IArticleProps {
    side: 'light' | 'dark' | 'neutrally';
    description: string;
    title: string | JSX.Element;
    preview: JSX.Element | string;
    type: 'video' | 'text' | 'image';
}

export default function Article({type, preview, description, title, side}: IArticleProps) {
    const cnArticle = cn('Article');
    const modify = {type, side};

    return (
        <div className={cnArticle(modify)}>
            <div className={cnArticle('Preview', modify)}>
                {preview}
            </div>
            <div className={cnArticle('Title', modify)}>
                {title}
            </div>
            <div className={cnArticle('Description', modify)}>
                {description}
            </div>
        </div>
    );
}
