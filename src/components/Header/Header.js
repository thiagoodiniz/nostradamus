import React from 'react';
import './Header.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Header() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <header className="header">
            <div className="header__logo">
                <span>Nostradamus</span>
            </div>

            <div className="header__tabs">
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="menu tabs"
                >
                    <Tab style={{textTransform: 'none'}} label="Treinamento" />
                    <Tab style={{textTransform: 'none'}} label="Meus modelos" disabled/>
                </Tabs>
            </div>

            <div className="header__user-info">
                Thiago Diniz
            </div>
        </header>
    );
}