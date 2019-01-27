import React from 'react';
import {cn} from '@bem-react/classname';

import './Article.sass';

export interface IArticleProps {
    side: 'light' | 'dark' | 'neutrally';
    description: string;
    title: string;
    preview: string;
    type: 'video' | 'text' | 'image';
}

export default function Article({type, preview, description, title, side}: IArticleProps) {
    const cnArticle = cn('Article');
    const modify = {type, side};

    let previewContent: string | JSX.Element | undefined;

    if (type === 'image') {
        previewContent = <img src={preview} alt={preview} title={title} className={cnArticle('Image', modify)} />;
    } else if (type === 'video') {
        previewContent = <video controls src={preview} className={cnArticle('Video')} />;
    } else if (type === 'text'){
        previewContent = `“${preview}”`;
    }

    return (
        <div className={cnArticle(modify)}>
            <div className={cnArticle('Preview', modify)}>
                {previewContent}
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
