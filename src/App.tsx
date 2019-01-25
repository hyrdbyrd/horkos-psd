import React, {Component} from 'react';

import './App.sass';

import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Additional from './components/Additional/Additional';
import About from './components/About/About';
import Articles from './components/Articles/Articles';
import Statistic from './components/Statistic/Statistic';
import Comments from './components/Comments/Comments';
import Choose from './components/Choose/Choose';

import {cn} from '@bem-react/classname';

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut debitis ipsa doloremque quibusdam minima nihil, incidunt consectetur dolorem tempora vel deleniti tenetur dolores facere cupiditate magnam illo ullam error!`;
const loremLess = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut debitis ipsa doloremque quibusdam minima nihil.`

export default class App extends Component {
    private cnApp = cn('App');

    render() {
        const {cnApp} = this;

        return (
            <main className={cnApp()}>
                <Header items={[<a className='Link' href='/'>Main</a>]} />
                <Intro idHref='#About' release='A long time ago in a galaxy far far away...' />
                <Additional title='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
                <About idHref='#Comments' title='Dark side' text={lorem} />
                <Articles articles={[
                    { type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor' },
                    { type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor' },
                    { type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor' },
                    { type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor' },
                    { type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor' },
                    { type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor' },
                    { type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor' },
                    { type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor' },
                    { type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor' },
                    { type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor' },
                    { type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor' }
                ]} />
                <Statistic />
                <Comments id='Comments' comments={[
                    {side: 'light', personName: 'Yoda', from: 'jedi academy', quote: loremLess},
                    {side: 'light', personName: 'Yoda', from: 'jedi academy', quote: loremLess},
                    {side: 'dark', personName: 'Dark Veider', from: 'jedi academy', quote: loremLess},
                    {side: 'dark', personName: 'Lord Sitius', from: 'jedi academy', quote: loremLess},
                ]} />
                <Choose />
            </main>
        )
    }
}
