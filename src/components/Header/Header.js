import React from 'react';
import './Header.scss';
import HeaderTabs from './HeaderTabs/HeaderTabs';

export default function Header() {

    return(
        <section className="header-content">
            <div className="header-content__logo">
                <span>Nostradamus</span>
            </div>

            <div className="header-content__tabs">
                <HeaderTabs />
            </div>

            <div className="header-content__user-info">
                Thiago Diniz
            </div>
        </section>
    );
}