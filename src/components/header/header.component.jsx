import React from 'react';
import { withRouter } from 'react-router-dom';
import { BackIcon } from '../back-icon/back-icon.component';

import './header.styles.scss';

class Header extends React.Component {
    render() {
        const { history } = this.props;
        return (
            <div className='header print-hidden'>
                <div className='hdr-left'>
                    <div className='hdr-back' onClick={() => history.goBack()}>
                        <BackIcon />
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(Header);