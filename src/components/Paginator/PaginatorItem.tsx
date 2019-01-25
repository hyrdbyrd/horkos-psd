import React from 'react';
import {cn} from '@bem-react/classname';

import './PaginatorItem.sass';

interface IPaginatorItem {
    active?: boolean;
    className?: string;
    idx: number;
    handler: (idx: number) => any;
}

export default function PaginatorItem({active = false, idx, handler, className}: IPaginatorItem) {
    const cnPaginatorItem = cn('PaginatorItem')

    function onClick() {
        handler(idx);
    };

    return (
        <div onClick={onClick} className={cnPaginatorItem({active}, [className])}>
            {idx + 1}
        </div>
    );
}
