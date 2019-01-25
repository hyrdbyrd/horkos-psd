import React, {Component} from 'react';

import {cn} from '@bem-react/classname';
import './Header.sass';

interface IHeaderProps {
    items?: (string | JSX.Element)[];
}

interface IHeaderState {
    isOpen: boolean;
}

export default class Header extends Component<IHeaderProps, IHeaderState> {
    private cnHeader = cn('Header');
    private cnBurger = cn('Burger');

    state = {
        isOpen: false
    }

    constructor(props: IHeaderProps) {
        super(props);

        this.onBugerClick = this.onBugerClick.bind(this);
    }

    onBugerClick() {
        this.setState(({isOpen}) => ({isOpen: !isOpen}));
    }

    render() {
        const {cnHeader, cnBurger, onBugerClick} = this;
        const {items = []} = this.props;
        const {isOpen} = this.state;

        return (
            <header className={cnHeader()}>
                <div className={cnHeader('Container', ['Container'])}>
                    <div className={cnBurger({active: isOpen})} onClick={onBugerClick}>
                        <div className={cnBurger('Inner')} />
                    </div>
                    <nav className={cnHeader('Nav', {active: isOpen})}>
                        {items.map((item, key) => (
                            <div className={cnHeader('NavItem')} key={key}>
                                {item}
                            </div>
                        ))}
                    </nav>
                </div>
            </header>
        );
    }
}
