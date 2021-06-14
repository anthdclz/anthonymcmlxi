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
                    <h1>Anthony&nbsp;&nbsp;&nbsp;dela Calzada</h1>
                    <div className='r-hdr-content'>
                        <span className='r-hdr-item'>Senior Web Developer, Growth Team Engineer</span>
                        <span className='fw-sb'>•</span>
                        <span className='r-hdr-item'><a href="mailto:anthony.delacalzada@gmail.com?subject=Inquiry" target="_blank" rel="noopener noreferrer">anthony.delacalzada@gmail.com</a></span><br />
                        <span className='r-hdr-item'>Bachelor of Science, Computer Science</span>
                        <span className='fw-sb'>•</span>
                        <span className='r-hdr-item'><SimpleLink className='fw-sb' name='"Caffa" - Web Demo' url='https://ghost-view-demo.herokuapp.com/' /></span>
                        <br className='web-hidden' />
                        <span className='r-hdr-item web-hidden'><SimpleLink url='https://ghost-view-demo.herokuapp.com/' /></span>
                    </div>
                </div>
                <div className='resume-body m-top-30'>
                    <SubAbout />
                    <SubSkills />
                    <SubExp />
                    <div className='page-break'></div>
                    <SubEdu />
                    <div className='page-break'></div>
                    <div className='resume-section'>
                        <h2> </h2>
                        <div>Email: <a href="mailto:anthony.delacalzada@gmail.com?subject=Inquiry" target="_blank" rel="noopener noreferrer" className='fw-sb'>anthony.delacalzada@gmail.com</a></div>
                        <div>Web Demo: <SimpleLink className='fw-sb' name='"Caffa" • https://ghost-view-demo.herokuapp.com/' url='https://ghost-view-demo.herokuapp.com/' /></div>
                        <div>Portfolio: <SimpleLink className='fw-sb' url='tbd' /></div>
                        <div>LinkedIn: <SimpleLink className='fw-sb' url='https://www.linkedin.com/in/anthony-dela-calzada/' /></div>
                    </div>
                </div>
            </div>
        );
    }
};
export default Resume;