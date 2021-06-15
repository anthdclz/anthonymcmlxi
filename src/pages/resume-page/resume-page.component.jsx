import React from 'react';
import Header from '../../components/header/header.component';
import Resume from '../../components/resume/resume.component';
import './resume-page.styles.scss';

class ResumePage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Header />
                <div className='page-content'>
                    <Resume />
                </div>
            </div>
        );
    }
};

export default ResumePage;