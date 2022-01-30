import React from 'react';
import { Link } from 'react-router-dom';

import { CoffeeIcon, ChartIcon, BoxingIcon, AnalyticsIcon, GamepadIcon } from '../../components/coffee-icon/coffee-icon.component';
import SimpleLink from '../../components/simple-link/simple-link.components';
import './home-page.styles.scss';

class HomePage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className='page-content'>
                <div className='page-wrapper'>
                    <div className='page-header m-top-60'>
                        <h2>Anthony&nbsp;&nbsp;&nbsp;dela Calzada</h2>
                        <h3><span>Senior Software Engineer</span><br className='web-hidden' /><span className='fw-sb mob-hidden'>•</span><span>Front End</span></h3>
                    </div>
                    <div className='page-divider'></div>
                    <div className='page-flex'>
                        <div className='page-column home-intro'>
                            <div><h3 className='m-top-0'><CoffeeIcon />Hi! Anthony here...</h3></div>
                            <div>Creative Software Engineer with 7+ years of professional experience in the e-commerce space, providing for 2000 online retailers and over 10 million shoppers.</div>
                            <div className='m-top-20'>Rapidly designed and deployed 5 A/B tests per month as part of a Growth Team to increase user activation and improve user experience.</div>
                            <div className='m-top-20'>Delivers UI functionality and extensible page components on the front end with JavaScript, HTML and CSS within the agile dev landscape. Excited to continue engineering growth in the innovative tech space.</div>
                        </div>
                        <div className='page-column home-exp'>
                            <div>Nov 2018 – Present</div>
                            <h4>Projects in Engineering, Finance and Game Design</h4>
                            <div className='fw-sb'>Self-employed</div>

                            <h3><SimpleLink className='rak' name='Rakuten (TYO: 4755)' url='https://www.rakuten.com/r/ANTHON?eeid=28187' /></h3>

                            <div>Sep 2017 – Oct 2018</div>
                            <h4 className='m-bottom-0'>Senior Web Developer</h4>
                            <div className='fw-sb'>Full-time</div>

                            <div className='m-top-20'>Sep 2014 – Sep 2017</div>
                            <h4>Web Developer</h4>
                            <div className='fw-sb'>Full-time</div>


                            <div className='m-top-20'>Apr 2011 – Sep 2014</div>
                            <h4>Web Developer</h4>
                            <div className='fw-sb'>Ebates - Full-time</div>

                            <div className='m-top-20'>2009</div>
                            <h4>San Francisco State University</h4>
                            <div className='fw-sb'>Bachelor of Science, Computer Science</div>
                        </div>
                    </div>
                    <div className='home-skills m-top-60'>
                        JavaScript<span className='fw-sb'>•</span>es6<span className='fw-sb'>•</span>HTML
                        <br className='web-hidden' /><span className='fw-sb mob-hidden'>•</span>
                        CSS<span className='fw-sb'>•</span>React<span className='fw-sb'>•</span>Redux
                        <br className='web-hidden' /><span className='fw-sb mob-hidden'>•</span>jQuery<br className='mob-hidden' /><span className='fw-sb web-hidden'>•</span>
                        Sass<span className='fw-sb'>•</span>PHP<br className='web-hidden' /><span className='fw-sb mob-hidden'>•</span>JSON<span className='fw-sb'>•</span>Bootstrap<span className='fw-sb'>•</span>Java<br className='web-hidden' /><span className='fw-sb mob-hidden'>•</span>XML<span className='fw-sb'>•</span>SQL<br className='mob-hidden' /><span className='fw-sb web-hidden'>•</span>
                        Git<br className='web-hidden' /><span className='fw-sb mob-hidden'>•</span>WordPress.org<span className='fw-sb'>•</span>IntelliJ IDEA<br className='web-hidden' /><span className='fw-sb mob-hidden'>•</span>Visual Studio
                    </div>
                    <div className='page-divider'></div>
                    <div className='side-proj'>
                        <div className='m-bottom-60'>
                            <h3 className='d-inline'>Interests and Side Projects</h3>
                        </div>
                        <div className='page-flex'>
                            <div className='page-column'>
                                <h3 className='m-top-0'>
                                    <a href='https://ghost-view-demo.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                                        <CoffeeIcon />"Caffa" - Web Demo
                                    </a>
                                </h3>
                                <div>Fun website demo reflecting a modern web application.</div>
                            </div>
                            <div className='page-column'>
                                <h3 className='m-top-0'>
                                    <a href='https://charted-2e73b.web.app' rel="noopener noreferrer">
                                        <ChartIcon />"Charted" - Web Demo
                                    </a>
                                </h3>
                                <div>Market simulator to gameify chart activity and chart creation tools.</div>
                            </div>
                        </div>
                        <div className='page-flex'>
                            <div className='page-column'>
                                <h3 className='m-top-60'>
                                    <a href='https://pocket-2dc44.web.app' rel="noopener noreferrer">
                                        <BoxingIcon />"Pouch Fighter" - Web Demo
                                    </a>
                                </h3>
                                <div>Turn-based and text-based head-to-head battle versus the CPU opponent.</div>
                            </div>
                            <div className='page-column'>
                                <h3 className='m-top-60'>
                                    <Link to='/chart-indicators'>
                                        <AnalyticsIcon />Market Indicators
                                    </Link>
                                </h3>
                                <div>Indicators that highlight over-extension and pivot points to supplment chart analysis.</div>
                            </div>
                        </div>
                        <div className='m-top-60'>
                            <h3>
                                <Link to='/video-game-design'>
                                    <GamepadIcon />Video Game Design
                                </Link>
                            </h3>
                            <div>Exploration of the video game design process.</div>
                        </div>
                    </div>
                    <div className='page-divider'></div>
                    <div className='home-skills m-top-20 m-bottom-60'>
                        <span>Anthony&nbsp;&nbsp;&nbsp;dela Calzada</span><br className='web-hidden' />
                        <span className='fw-sb mob-hidden'>•</span>
                        <SimpleLink name='LinkedIn' url='https://www.linkedin.com/in/anthony-dela-calzada/' /><br className='web-hidden' />
                        <span className='fw-sb mob-hidden'>•</span>
                        <Link to='/resume'>Résumé</Link><br className='web-hidden' />
                        <span className='fw-sb mob-hidden'>•</span>
                        <a href="mailto:anthony.delacalzada@gmail.com?subject=Inquiry" target="_blank" rel="noopener noreferrer">anthony.delacalzada@gmail.com</a>
                    </div>
                </div>
            </div>
        );
    }
};

export default HomePage;