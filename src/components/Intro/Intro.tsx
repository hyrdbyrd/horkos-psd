import React from 'react';

import './Intro.sass';

import ScrollTo from '../ScrollTo/ScrollTo';

interface IIntroProps {
    idHref?: string;
}

export default function Intro({idHref = '#'}: IIntroProps) {
    return (
        <ScrollTo idHref={idHref} />
    );
}
