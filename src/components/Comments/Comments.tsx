import React from 'react';
import {cn} from '@bem-react/classname';

import './Comments.sass';
import Comment, {ICommentProps} from './Comment';

interface ICommentsProps {
    comments?: ICommentProps[];
}

export default function Comments({comments = []}: ICommentsProps) {
    const cnComments = cn('Comments');

    return (
        <div className={cnComments('CommentsList')}>
            {comments.map((props, key) => (
                <Comment {...props} key={key} />
            ))}
        </div>
    );
}
