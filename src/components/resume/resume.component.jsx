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
                        <div className='mob-hidden'>
                            <span className='r-hdr-item'>Senior Web Developer, Growth Team Engineer</span>
                            <span className='fw-sb'>•</span>
                            <span className='r-hdr-item'><a href="mailto:anthony.delacalzada@gmail.com?subject=Inquiry" target="_blank" rel="noopener noreferrer">anthony.delacalzada@gmail.com</a></span>
                        </div>
                        <div className='mob-hidden print-hidden'>
                            <span className='r-hdr-item'><SimpleLink className='fw-sb' name='"Caffa" - Web Demo' url='https://ghost-view-demo.herokuapp.com/' /></span>
                            <span className='fw-sb'>•</span>
                            <span className='r-hdr-item'><SimpleLink className='fw-sb' name='Portfolio' url='https://anthony-delacalzada.herokuapp.com/' /></span>
                            <span className='fw-sb'>•</span>
                            <span className='r-hdr-item'>Bachelor of Science, Computer Science</span>
                        </div>
                        <div className='print-small web-hidden mob-hidden'>
                            <span className='r-hdr-item'>Caffa" Web Demo:&nbsp;&nbsp;&nbsp;<SimpleLink url='https://ghost-view-demo.herokuapp.com/' /></span><br />
                            <span className='r-hdr-item'>Portfolio:&nbsp;&nbsp;&nbsp;<SimpleLink url='https://anthony-delacalzada.herokuapp.com/' /></span>
                            <span className='fw-sb'>•</span>
                            <span className='r-hdr-item'>Bachelor of Science, Computer Science</span>
                        </div>
                        <div className='mob-hdr web-hidden print-hidden'>
                            <div className='r-hdr-item'>Senior Web Developer</div>
                            <div className='r-hdr-item'>Growth Team Engineer</div>
                            <div className='r-hdr-item'>
                                <span className='r-hdr-item'><SimpleLink className='fw-sb' name='Portfolio' url='https://anthony-delacalzada.herokuapp.com/' /></span>
                                <span className='fw-sb'>•</span>
                                <span className='r-hdr-item'><SimpleLink className='fw-sb' name='"Caffa" - Web Demo' url='https://ghost-view-demo.herokuapp.com/' /></span>
                            </div>
                            <div className='r-hdr-item'><a href="mailto:anthony.delacalzada@gmail.com?subject=Inquiry" target="_blank" rel="noopener noreferrer">anthony.delacalzada@gmail.com</a></div>
                            <div className='r-hdr-item'>Bachelor of Science, Computer Science</div>
                        </div>
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
                        <div>Email: <a href="mailto:anthony.delacalzada@gmail.com?subject=Inquiry" target="_blank" rel="noopener noreferrer">anthony.delacalzada@gmail.com</a></div>
                        <div>Web Demo: <SimpleLink name='"Caffa" • https://ghost-view-demo.herokuapp.com/' url='https://ghost-view-demo.herokuapp.com/' /></div>
                        <div>Portfolio: <SimpleLink url='https://anthony-delacalzada.herokuapp.com/' /></div>
                        <div>LinkedIn: <SimpleLink url='https://www.linkedin.com/in/anthony-dela-calzada/' /></div>
                    </div>
                </div>
            </div>
        );
    }
};
export default Resume;