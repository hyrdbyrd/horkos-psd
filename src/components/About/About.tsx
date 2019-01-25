import React from "react";
import {cn} from "@bem-react/classname";

import './About.sass';

interface IAboutProps {
    title?: string | JSX.Element;
    text?: string | JSX.Element;
    idHref?: string;
}

export default function About({ title = 'Dark side', text = 'Sucks...', idHref = '#'}: IAboutProps) {
    const cnAbout = cn('About');
    const cnBtn = cn('Btn');

    return (
        <section id='About' className={cnAbout()}>
            <div className={cnAbout('Container', ['Container'])}>
                <div className={cnAbout('PreTitle')}>
                    About Us
                </div>
                <div className={cnAbout('Title')}>
                    {title}
                </div>
                <div className={cnAbout('Text')}>
                    {text}
                </div>
                <a href={idHref} className={cnAbout('ReadMore', ['Link'])}>
                    <div className={cnBtn({side: 'dark'})}>
                        Read More
                    </div>
                </a>
            </div>
        </section>
    );
}
