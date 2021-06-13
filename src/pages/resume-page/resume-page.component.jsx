import React from 'react';
import Header from '../../components/header/header.component';
import Resume from '../../components/resume/resume.component';
import './resume-page.styles.scss';

const ResumePage = () => (
    <div>
        <Header />
        <div className='page-content'>
            <Resume />
        </div>
    </div>
);

export default ResumePage;