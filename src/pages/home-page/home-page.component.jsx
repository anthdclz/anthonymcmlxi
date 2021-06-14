import React from 'react';
import { Link } from 'react-router-dom';

import { CoffeeIcon, ChartIcon, GamepadIcon } from '../../components/coffee-icon/coffee-icon.component';
import SimpleLink from '../../components/simple-link/simple-link.components';
import './home-page.styles.scss';

const HomePage = () => (
    <div className='page-content'>
        <div className='page-wrapper'>
            <div className='m-top-60'>
                <h2>Anthony&nbsp;&nbsp;&nbsp;dela Calzada</h2>
                <h3><span>Senior Web Developer</span><span className='fw-sb'>•</span><span>Growth Team Engineer</span></h3>
            </div>
            <div className='page-divider'></div>
            <div className='page-flex'>
                <div className='page-column'>
                    <div><CoffeeIcon />Creative Senior Web Developer with 7+ years of professional experience in the e-commerce space, providing for 2000 online retailers and over 10 million shoppers.</div>
                    <div className='m-top-20'>Rapidly designed and deployed 5 A/B tests per month as part of a five member Growth Team to increase user activation and improve user experience.</div>
                    <div className='m-top-20'>Delivers UI functionality and extensible page components with JavaScript, HTML and CSS within the agile dev landscape. Currently fulfilling personal ventures in finance, investing and game development.</div>
                    <div className='m-top-20'>
                        Web Demo<br />
                        Résumé
                    </div>
                </div>
                <div className='page-column home-exp'>
                    <div>Nov 2018 – Present</div>
                    <h4>Projects in Finance and Game Development</h4>
                    <div className='fw-sb'>Self-employed</div>

                    <h3><SimpleLink className='rak' name='Rakuten' url='https://www.rakuten.com/r/ANTHON?eeid=28187' /></h3>

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
                JavaScript<span className='fw-sb'>•</span>es6<span className='fw-sb'>•</span>HTML<span className='fw-sb'>•</span>CSS<span className='fw-sb'>•</span>React<span className='fw-sb'>•</span>Redux<span className='fw-sb'>•</span>jQuery<br />
            Sass<span className='fw-sb'>•</span>PHP<span className='fw-sb'>•</span>JSON<span className='fw-sb'>•</span>Bootstrap<span className='fw-sb'>•</span>Java<span className='fw-sb'>•</span>XML<span className='fw-sb'>•</span>SQL<br />
            Git<span className='fw-sb'>•</span>WordPress.org<span className='fw-sb'>•</span>IntelliJ IDEA<span className='fw-sb'>•</span>Visual Studio
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
                        <div>Fun website demo.</div>
                    </div>
                    <div className='page-column'>
                        <h3 className='m-top-0'>
                            <Link to='/chart-indicators'>
                                <ChartIcon />Chart Indicators
                            </Link>
                        </h3>
                        <div>Market indicators to supplment chart analysis.</div>
                    </div>
                </div>
                <div className='m-top-60'>
                    <h3>
                        <Link to='/video-game-design'>
                            <GamepadIcon />Video Game Design
                        </Link>
                    </h3>
                    <div>Exploring aspects of the video game design process.</div>
                </div>
            </div>
            <div className='page-divider'></div>
            <div className='m-top-20 m-bottom-60'>
                        Résumé<br/>
                        LinkedIn
            </div>
        </div>
    </div>
);

export default HomePage;