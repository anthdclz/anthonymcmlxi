import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { BackIcon } from '../back-icon/back-icon.component';

import './header.styles.scss';

class Header extends React.Component {
    render() {
        return (
            <div className='header print-hidden'>
                <div className='hdr-left'>
                    <Link className='hdr-back' to='/'>
                        <BackIcon />
                    </Link>
                </div>
            </div>
        );
    }
};

export default withRouter(Header);