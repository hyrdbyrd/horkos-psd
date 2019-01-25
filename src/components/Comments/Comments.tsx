import React from 'react';
import {cn} from '@bem-react/classname';

import './Comments.sass';
import Comment, {ICommentProps} from './Comment';

interface ICommentsProps {
    comments?: ICommentProps[];
    description?: string;
    title?: string;
    id?: string;
}

export default function Comments({id, comments = [], title = 'Comments', description = 'Lorem ipsum dolor apsum'}: ICommentsProps) {
    const cnComments = cn('Comments');

    return (
        <div id={id} className={cnComments()}>
            <div className={cnComments('Intro')}>
                <div className={cnComments('Title')}>
                    {title}
                </div>
                <div className={cnComments('Description')}>
                    {description}
                </div>
            </div>
            <div className={cnComments('CommentsList')}>
                {comments.map((props, key) => (
                    <Comment {...props} key={key} />
                ))}
            </div>
        </div>
    );
}
