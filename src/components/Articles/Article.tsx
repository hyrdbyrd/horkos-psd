import React from 'react';
import {cn} from '@bem-react/classname';

import './Article.sass';

export interface IArticleProps {
    type: 'video' | 'text' | 'image';
    preview: JSX.Element | string;
    description: string;
    title: string | JSX.Element;
}

export default function Article({type, preview, description, title}: IArticleProps) {
    const cnArticle = cn('Article');
    const modify = {type};

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
