import React from 'react';
import './Header.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

export default function Header() {
    const [value, setValue] = React.useState(0);

    const tabs = [
        {
            title: 'Treinamento',
            route: '/trainings'
        },
        {
            title: 'Meus modelos',
            route: '/models'
        }
    ];

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <section className="header-content">
            <div className="header-content__logo">
                <span>Nostradamus</span>
            </div>

            <div className="header-content__tabs">
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="menu tabs"
                >
                    { tabs.map((tab, idx) => 
                        <Tab style={{textTransform: 'none'}} key={idx} component={Link} to={tab.route} label={tab.title} />
                    ) }
                </Tabs>
            </div>

            <div className="header-content__user-info">
                Thiago Diniz
            </div>
        </section>
    );
}