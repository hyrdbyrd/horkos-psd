import React from 'react';
import {connect} from 'react-redux';

import {IState} from '../../modules/default-state';

import {cn} from '@bem-react/classname';

import './About.sass';

interface IAboutProps {
    title?: string | JSX.Element;
    text?: string | JSX.Element;
    idHref?: string;
    side?: string;
}

function About({title = 'Dark side', text = 'Lorem', idHref = '#', side = 'neutrally'}: IAboutProps) {
    const cnAbout = cn('About');
    const cnBtn = cn('Btn');

    return (
        <section className={cnAbout()}>
            <div className={cnAbout('Container', {side})}>
                <div className={cnAbout('PreTitle', {side})}>
                    About Us
                </div>
                <div className={cnAbout('Title')}>
                    {title}
                </div>
                <div className={cnAbout('Text')}>
                    {text}
                </div>
                <a href={idHref} className={cnAbout('ReadMore', ['Link'])}>
                    <div className={cnBtn({side})}>
                        Read More
                    </div>
                </a>
            </div>
        </section>
    );
}

export default connect(({side}: IState) => ({side}))(About);
