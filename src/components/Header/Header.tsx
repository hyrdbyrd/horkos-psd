import React, {Component} from 'react';
import {connect} from 'react-redux';

import {IState} from '../../modules/default-state';

import {cn} from '@bem-react/classname';
import './Header.sass';

interface IHeaderProps {
    items?: {href: string, text: string}[];
    side?: string;
}

interface IHeaderState {
    isOpen: boolean;
}

class Header extends Component<IHeaderProps, IHeaderState> {
    private cnHeader = cn('Header');
    private cnBurger = cn('Burger');

    state = {
        isOpen: false
    }

    constructor(props: IHeaderProps) {
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    private toggle() {
        this.setState(({isOpen}) => {
            isOpen = !isOpen;
            document.body.classList[isOpen ? 'add' : 'remove']('NoOverflow');

            return {isOpen};
        });
    }

    render() {
        const {cnHeader, cnBurger, toggle} = this;
        const {items = [], side = 'neutrally'} = this.props;
        const {isOpen} = this.state;

        return (
            <header className={cnHeader()}>
                <div className={cnHeader('Container', ['Container'])}>
                    <div className={cnBurger({active: isOpen, side})} onClick={toggle}>
                        <div className={cnBurger('Inner')} />
                    </div>
                    <nav onClick={toggle} className={cnHeader('Nav', {active: isOpen, side})}>
                        {items.map(({href, text}, key) => (
                            <a href={href} className={cnHeader('NavItem', {side}, ['Link'])} key={key}>
                                {text}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>
        );
    }
}

export default connect(({side}: IState) => ({side}))(Header);
