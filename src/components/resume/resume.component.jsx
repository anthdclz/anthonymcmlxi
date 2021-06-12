import React from 'react';
import SubAbout from './sub-about.componet';
import SubEdu from './sub-edu.component';
import SubExp from './sub-exp.component';
import SubSkills from './sub-skills.component';
import SimpleLink from '../simple-link/simple-link.components';
import './resume.styles.scss';

class Resume extends React.Component {
    render() {
        return (
            <div className='resume-wrapper'>
                <div className='resume-header'>
                    <h1>Anthony dela Calzada</h1>
                    <div className='resume-horiz'>
                        <div>Senior Web Developer, Growth Team Engineer</div>
                        <div><a href="mailto:anthony.delacalzada@gmail.com?subject=Inquiry" target="_blank" rel="noopener noreferrer">anthony.delacalzada@gmail.com</a></div>
                    </div>
                    <div className='resume-horiz'>
                        <div>Bachelor of Science, Computer Science</div>
                        <div><SimpleLink className='fw-sb' name='Kaffa - Web Demo' url='https://ghost-view-demo.herokuapp.com/' /></div>
                        <div className='web-hidden'><SimpleLink url='https://ghost-view-demo.herokuapp.com/' /></div>
                    </div>
                </div>
                <div className='resume-body'>
                    <div className='resume-horiz'>
                        <SubAbout />
                        <SubExp />
                    </div>
                    <div className='resume-horiz'>
                        <SubEdu />
                        <SubSkills />
                    </div>
                    <div className='m-top-20'>San Francisco, California</div>
                    <div>LinkedIn: <SimpleLink url='https://www.linkedin.com/in/anthony-dela-calzada/' /></div>
                </div>
            </div>
        );
    }
};
export default Resume;