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

        return length > 0 && (
            <div className={cnPaginator()}>
                {hasPrev && <Arrow className={cnPaginator('Arrow', {side: 'prev'})} handler={this.slideHandler(-1)} />}
                {new Array(length)
                    .fill(0)
                    .map((_, idx) => <PaginatorItem idx={idx} active={idx === activePage} className={cnPaginator('Item')} handler={this.handler(idx)} key={idx} /> )
                }
                {hasNext && <Arrow className={cnPaginator('Arrow', {side: 'next'})} handler={this.slideHandler(1)} />}
            </div>
        );
    }
}
