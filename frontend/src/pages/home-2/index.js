import React from 'react';
import HomeTwoMain from './HomeTwoMain';
import HeaderStyleThree from '../../components/Header/HeaderStyleThree';
import FooterTwo from '../../components/Footer/FooterStyleTwo';

import Logo from '../../assets/images/logos/logo-colored.svg';

class HomeTwo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeaderStyleThree
                    parentMenu='home'
                    headerNormalLogo={Logo}
                    headerClass='ras-header ras-header-2'
                />
                <HomeTwoMain />
                <FooterTwo 
                    footerCTA='enable'
                />
            </React.Fragment>
        );
    }
}


export default HomeTwo;

