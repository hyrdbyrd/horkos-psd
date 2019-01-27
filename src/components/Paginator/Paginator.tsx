import React, {Component} from 'react';

import PaginatorItem from './PaginatorItem';
import {cn} from '@bem-react/classname';

import './Paginator.sass';

import arrowNext from '../../images/arrow-next.png';

interface IArrowProps {
    className?: string;
    handler: () => any;
}

function Arrow({className = '', handler}: IArrowProps) {
    return <img src={arrowNext} className={className} onClick={handler} />
}

interface IPaginatorProps {
    length: number;
    handler: (idx: number) => any;
}

interface IPaginatorState {
    activePage: number;
}

export default class Paginator extends Component<IPaginatorProps, IPaginatorState> {
    private cnPaginator = cn('Paginator');

    state = {
        activePage: 0
    }

    private handler(idx: number) {
        const self = this;

        return function() {
            self.props.handler(idx);
            self.setState({activePage: idx});
        }
    }

    private slideHandler(dir: -1 | 1) {
        return this.handler(this.state.activePage + dir);
    }

    render() {
        const {cnPaginator} = this;

        const {length} = this.props;
        const {activePage} = this.state;

        const hasPrev = activePage !== 0;
        const hasNext = activePage !== length - 1;

        let startSlice = activePage - 1;
        startSlice = startSlice < 0 ? 0 : startSlice;
        let endSlice = activePage + 1;

        const allTabs = new Array(length)
            .fill(0)
            .map((_, idx) => (
                <PaginatorItem
                    idx={idx}
                    active={idx === activePage}
                    className={cnPaginator('Item', {first: idx === 0, last: idx === length - 1})}
                    handler={this.handler(idx)}
                    key={idx}
                />
            ));

        let tabs = [
            startSlice ? allTabs[0] : null,
            ...allTabs.slice(startSlice, endSlice + 1),
            endSlice < length - 1 ? allTabs[length - 1] : null
        ];

        return length > 0 && (
            <div className={cnPaginator()}>
                {hasPrev && <Arrow className={cnPaginator('Arrow', {side: 'prev'})} handler={this.slideHandler(-1)} />}
                {tabs}
                {hasNext && <Arrow className={cnPaginator('Arrow', {side: 'next'})} handler={this.slideHandler(1)} />}
            </div>
        );
    }
}
