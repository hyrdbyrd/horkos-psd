import React from "react";

import {cn} from "@bem-react/classname";
import './Intro.sass';

import ScrollTo from '../ScrollTo/ScrollTo';

interface IIntroProps {
    title?: string | JSX.Element;
    release?: string | JSX.Element;
    idHref?: string;
}

export default function Intro({title = 'Star Wars', release = 'A long time ago...', idHref = '#'}: IIntroProps) {
    const cnIntro = cn('Intro');
    return (
        <section className={cnIntro()}>
            <div className={cnIntro('Container', ['Container'])}>
                <div className={cnIntro('Title')}>
                    {title}
                </div>
                <div className={cnIntro('Release')}>
                    {release}
                </div>
                <ScrollTo idHref={idHref} />
            </div>
        </section>
    );
}
