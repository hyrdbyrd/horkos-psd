import React, {Component} from 'react';

import './App.sass';

import yoda from './images/yoda.jpg';
import obi from './images/obi.jpg';
import vader from './images/vader.jpg';
import sitius from './images/sitius.jpg';
import boba from './images/boba.jpg';
import jango from './images/jango.jpg';

import Section from './components/Section/Section';
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
                <Header items={[
                    {href: '#', text: 'Main'},
                    {href: '#About', text: 'About'},
                    {href: '#Articles', text: 'Articles'},
                    {href: '#Stats', text: 'Stats'},
                    {href: '#Comments', text: 'Comments'},
                    {href: '#ChooseSide', text: 'Choose your side'},
                ]} />
                <Section className='Intro' title='Star Wars' description='A long time ago in a galaxy far far away...' >
                    <Intro idHref='#About' />
                </Section>
                <Additional title='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
                <Section>
                    <About idHref='#Comments' title='Title' text={lorem} />
                </Section>
                <Section title='Articles' id='Articles' description='yep'>
                    <Articles articles={[
                        {type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor', side: 'light'},
                        {type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor', side: 'light'},
                        {type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor', side: 'dark'},
                        {type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor', side: 'dark'},
                        {type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor', side: 'light'},
                        {type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor', side: 'light'},
                        {type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor', side: 'neutrally'},
                        {type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor', side: 'neutrally'},
                        {type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor', side: 'light'},
                        {type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor', side: 'light'},
                        {type: 'text', preview: lorem, description: lorem, title: 'Lorem ipsum dolor', side: 'light'}
                    ]} />
                </Section>
                <Section title='Stats' id='Stats' description='Lorem ipsum dolor sit amet'>
                    <Statistic />
                </Section>
                <Section title='Comments' description='What about us  speaks' className='Comments' id='Comments'>
                    <Comments comments={[
                        { side: 'light', personName: 'Yoda', from: 'jedi academy', quote: loremLess, imagePath: yoda },
                        { side: 'light', personName: 'Obivan', from: 'jedi academy', quote: loremLess, imagePath: obi },
                        { side: 'neutrally', personName: 'Boba Fett', from: 'higher clone', quote: loremLess, imagePath: boba },
                        { side: 'neutrally', personName: 'Jango Fett', from: 'higher clone', quote: loremLess, imagePath: jango },
                        { side: 'dark', personName: 'Lord Vader', from: 'sith', quote: loremLess, imagePath: vader },
                        { side: 'dark', personName: 'Lord Sitius', from: 'sith', quote: loremLess, imagePath: sitius },
                    ]} />
                </Section>
                <Section title='Choose your side' id='ChooseSide'>
                    <Choose />
                </Section>
            </main>
        )
    }
}
