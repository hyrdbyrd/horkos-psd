import React from 'react';
import {connect} from 'react-redux';

import {IState} from '../../modules/default-state';

import {cn} from '@bem-react/classname';

import './Section.sass';

interface ISectionProps {
    id?: string;
    side?: string;
    title?: string;
    className?: string;
    description?: string;
    children?: JSX.Element;
}

function Section({side, children, className = 'Section', id, title, description}: ISectionProps) {
    const cnSection = cn('Section');
    const modifier = {side};

    const cnMix = cn(className);

    function genClassName(itemName?: string): string {
        return itemName
            ? cnSection(itemName, modifier, [cnMix(itemName, modifier)])
            : cnSection(modifier, [cnMix(modifier)]);
    }

    const descBlock = description && (
        <div className={genClassName('Description')}>
            {description}
        </div>
    );

    const titleBlock = title && (
        <div className={genClassName('Title')}>
            {title}
        </div>
    );

    return (
        <section id={id} className={genClassName()}>
            {(description || title) && (
                <div className={genClassName('Intro')}>
                    {titleBlock}
                    {descBlock}
                </div>
            )}
            {children && (
                <div className={genClassName('Container')}>
                    {children}
                </div>
            )}
        </section>
    )
}

export default connect(({side}: IState) => ({side}))(Section);
