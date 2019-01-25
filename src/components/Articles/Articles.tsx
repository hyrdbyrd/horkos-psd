import React, {Component} from "react";

import Article, {IArticleProps} from './Article';
import Paginator from '../Paginator/Paginator';

import {cn} from "@bem-react/classname";

import './Articles.sass';

interface IArticlesProps {
    articles?: IArticleProps[];
    description?: string;
    title?: string;
}

interface IArticleState {
    activePage: number;
}

export default class Articles extends Component<IArticlesProps, IArticleState> {
    private cnArticles = cn('Aritcles');
    private slice = 4;

    state = {
        activePage: 0
    }

    constructor(props: IArticlesProps) {
        super(props);

        this.checkForSize = this.checkForSize.bind(this);
        this.handler = this.handler.bind(this);

        this.checkForSize();
    }

    checkForSize() {
        let slice = 5;
        const {innerWidth} = window;

        if (1480 < innerWidth && innerWidth <= 1980) {
            slice = 4;
        } else if (980 < innerWidth && innerWidth <= 1480) {
            slice = 3;
        } else if (580 < innerWidth && innerWidth <= 980) {
            slice = 2;
        } else if (320 <= innerWidth && innerWidth <= 580) {
            slice = 1;
        } else {
            slice = 0;
        }

        this.slice = slice;
    }

    handler(idx: number) {
        this.setState({activePage: idx});
    }

    createParts(): IArticleProps[][] {
        const {slice} = this;
        const {articles = []} = this.props
        const res = [];

        for (let i = 0; i < articles.length; i += slice) {
            res.push(articles.slice(i, i + slice));
        }

        return res;
    }

    render() {
        const {cnArticles, slice} = this;

        const {articles = [], title = 'Check out last articles', description = 'Lorem ipsum'} = this.props;
        const {activePage} = this.state;

        const parts = this.createParts()[activePage];

        return (
            <section className={cnArticles()}>
                <div className={cnArticles('Container', ['Container'])}>
                    <div className={cnArticles('Intro')}>
                        <div className={cnArticles('Title')}>
                            {title}
                        </div>
                        <div className={cnArticles('Description')}>
                            {description}
                        </div>
                    </div>
                    <div className={cnArticles('Content')}>
                        {parts.map((article, key) => <Article {...article} key={key} />)}
                    </div>
                    <div className={cnArticles('Paginator')}>
                        <Paginator length={Math.round(articles.length / slice)} handler={this.handler} />
                    </div>
                </div>
            </section>
        );
    }
}
